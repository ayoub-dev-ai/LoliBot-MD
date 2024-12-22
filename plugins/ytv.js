import yts from 'yt-search';
import axios from 'axios';
import fs from 'fs';
import os from 'os';
import { exec } from 'child_process';
import { conn } from 'your-connection-library';

const handler = async (m, { command, text, usedPrefix }) => {
  if (!text) throw `استخدم المثال: ${usedPrefix}${command} <كلمة البحث>`;

  const search = await yts(text);
  const vid = search.videos[Math.floor(Math.random() * search.videos.length)];

  if (!vid) throw 'لم يتم العثور على فيديو، حاول باستخدام عنوان آخر';

  const { title, thumbnail, url } = vid;

  try {
    const response = await axios.get(`${APIs.ryzen}/api/downloader/ytmp4?url=${url}`);
    const downloadUrl = response.data.url;

    if (!downloadUrl) throw 'لم يتم العثور على رابط الفيديو';

    await conn.sendMessage(m.chat, { text: `رابط تحميل الفيديو: ${downloadUrl}` }, { quoted: m });

  } catch (error) {
    console.error('خطأ:', error.message);
    throw `خطأ: ${error.message}. الرجاء التحقق من الرابط والمحاولة مرة أخرى.`;
  }
};

handler.help = ['ytv'].map((v) => v + ' <استعلام>');
handler.tags = ['downloader'];
handler.command = /^(ytv)$/i;

handler.limit = 8;
handler.register = true;
handler.disable = false;

export default handler;