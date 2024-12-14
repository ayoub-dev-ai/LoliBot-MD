import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/Hvjxc.jpg')
if (user.registered === true) throw `*⚠️ انت مسجل*\n\n¿تريد ازالة حسابك ?\n\n💬 استعمل الامر *يستبعد تسجيلك*\n*${usedPrefix}unreg* <رقم حسابك>`
if (!Reg.test(text)) throw `*⚠️ استعمال غلط*\n\n📝 استعمل الامر: *${usedPrefix + command} الاسم.العمر*\n💡 مثال : *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*📝 ادخل اسمك*'
if (!age) throw '*📝 ادخل عمرك*'
if (name.length >= 30) throw '*⚠️ اسمك كبير جدا*' 
age = parseInt(age)
if (age > 100) throw '*👴🏻 اذهب الى قبرك*'
if (age < 5) throw '*👀 انا لست p diddy*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('📩') 
let regbot = `🗃️ *تـــــــم الــــســـجـــــيــــل* 🗃️
🪁 *اسمك:* ${name}
🎨 *عمرك* : ${age} العمر
🥏 *رقم تعريفك*:
${sn}`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['make-account', 'register', 'reg'] 

export default handler
