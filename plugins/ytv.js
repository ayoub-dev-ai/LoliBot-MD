import yts from 'yt-search'
import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} 7!! Orange`;

  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!vid) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;

  conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: 'Please wait...' }, { quoted: m });

  // Fetch the download URL from the new API
  const apiUrl = `https://bk9.fun/download/ytmp3?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Log the full API response to debug (if needed)
    console.log('API Response:', data);

    // Extract the 64kbps download URL from the response
    const quality = "64kbps";
    const downloadUrl = data.BK9.downloadUrl.find(item => item.quality === quality)?.downloadUrl;

    if (!downloadUrl) throw `Failed to retrieve download URL for ${quality}`;

    // Get the path to the system's temporary directory
    const tmpDir = os.tmpdir();
    const filePath = `${tmpDir}/${title}.mp3`;

    // Create writable stream in the temporary directory
    const writableStream = fs.createWriteStream(filePath);

    // Download audio
    const audioResponse = await fetch(downloadUrl);
    if (!audioResponse.ok) throw new Error(`Failed to download audio: ${audioResponse.statusText}`);

    // Pipe the response into the writable stream
    audioResponse.body.pipe(writableStream);

    writableStream.on('finish', async () => {
      let doc = {
        audio: {
          url: filePath
        },
        mimetype: 'audio/mp4',
        fileName: title,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: url,
            title: title,
            body: 'Audio Download',
            sourceUrl: url,
            thumbnail: await (await conn.getFile(thumbnail)).data
          }
        }
      };

      await conn.sendMessage(m.chat, doc, { quoted: m }).then(() => {
        // Delete the audio file after sending
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Failed to delete audio file: ${err}`);
          } else {
            console.log(`Deleted audio file: ${filePath}`);
          }
        });
      }).catch((err) => {
        console.error(`Failed to send message: ${err}`);
      });
    });

    writableStream.on('error', (err) => {
      console.error(`Failed to write audio file: ${err}`);
      m.reply('Failed to download audio');
    });
  } catch (error) {
    console.error(`Error fetching download URL: ${error}`);
    m.reply('Failed to fetch audio download URL');
  }
}

handler.help = ['play'].map((v) => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play)$/i

handler.limit = 8
handler.register = true
handler.disable = false

export default handler