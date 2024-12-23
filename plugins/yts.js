import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'اسم الفيديو ?'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_الرابط :_* ${v.url}
↳ 🕒 *_المدة  :_* ${v.timestamp}
↳ 📥 *_بتاريخ :_* ${v.ago}
↳ 👁 *_المشاهدات :_* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['yts <الفيديو>']
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

handler.register = false

export default handler