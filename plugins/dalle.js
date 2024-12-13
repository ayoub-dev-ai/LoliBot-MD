let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'هذا الامر ل انشاء صور بالذكاء الاصطناعي\n\nمثال : *.dalle* morroco boy'
  try { 
  let response = await fetch(`https://api.botcahx.eu.org/api/search/openai-image?apikey=${btc}&text=${encodeURIComponent(text)}`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'aiimg.jpg',  wm, m)
  } catch (e) {
    throw `Error: ${eror}`
  }

}
handler.command = handler.help = ['dalle']
handler.tags = ['ai']

module.exports = handler