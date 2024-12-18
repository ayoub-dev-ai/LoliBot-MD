import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '⚠️ *_ماذا تريد البحث في اليوتيوب?_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ ⚡ *_الرابط :_* ${v.url}
↳ 💫 *_المدة :_* ${v.timestamp}
↳ ߷ *_تاريخ التنزيل :_* ${v.ago}
↳ Ⱅ *_المشاهدات :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m, rcanal);
};
handler.help = ['ytsearch *<عنوان>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
handler.group = true;
export default handler;