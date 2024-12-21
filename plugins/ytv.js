import yts from 'yt-search'
import fs from 'fs'
import os from 'os'
import axios from 'axios'

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `استخدم المثال: ${usedPrefix}${command} <كلمة البحث>`;

  const search = await yts(text);
  const vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!vid) throw 'لم يتم العثور على فيديو، حاول باستخدام عنوان آخر';

  const { title, thumbnail, timestamp, views, ago, url } = vid;

  await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: 'يرجى الانتظار...' }, { quoted: m });

  try {
    const response = await axios.get(`${APIs.ryzen}/api/downloader/ytmp4?url=${encodeURIComponent(url)}`);
    const downloadUrl = response.data.url;

    if (!downloadUrl) throw new Error('لم يتم العثور على رابط الفيديو');

    const tmpDir = os.tmpdir();
    const filePath = `${tmpDir}/${title}.mp4`;

    const videoResponse = await axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'stream',
    });

    const writableStream = fs.createWriteStream(filePath);
    videoResponse.data.pipe(writableStream);

    writableStream.on('finish', async () => {
      await conn.sendMessage(m.chat, {
        video: fs.createReadStream(filePath),
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`,
        caption: `العنوان: ${title}\nالطول: ${timestamp}\nعدد المشاهدات: ${views}\nتم الرفع: ${ago}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: url,
            title: title,
            body: 'تحميل الفيديو',
            sourceUrl: url,
            thumbnail: await (await conn.getFile(thumbnail)).data,
          },
        },
      }, { quoted: m });

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`فشل في حذف الملف الفيديو: ${err}`);
        } else {
          console.log(`تم حذف الملف الفيديو: ${filePath}`);
        }
      });
    });

    writableStream.on('error', (err) => {
      console.error(`فشل في كتابة الملف الفيديو: ${err}`);
      m.reply('فشل في تنزيل الفيديو');
    });
  } catch (error) {
    console.error('خطأ:', error.message);
    throw `خطأ: ${error.message}. الرجاء التحقق من الرابط والمحاولة مرة أخرى.`;
  }
};

handler.help = ['ytv'].map((v) => v + ' <استعلام>');
handler.tags = ['downloader'];
handler.command = /^(ytv)$/i;

handler.limit = 8
handler.register = true
handler.disable = false

export default handler