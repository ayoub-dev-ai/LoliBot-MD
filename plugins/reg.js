import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => imageUrl.getRandom()) 
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
let biot = bio.status?.toString() || 'Sin Info'
const date = moment.tz('Africa/Casablanca').format('DD/MM/YYYY')
const time = moment.tz('Africa/Casablanca').format('LT')
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let name2 = conn.getName(m.sender)

if (command == 'verify' || command == 'reg' || command == 'verificar') {
if (user.registered === true) throw `*Ya estás registrado 🤨*`
if (!Reg.test(text)) throw `*⚠️ ¿No sabes cómo usar este comando?* Sigue estos pasos:\n\n• Unirte al grupo:\n${nn}\n• Después usa el comando de la siguiente manera: *${usedPrefix + command} nombre.edad*\n*• Ejemplo:* ${usedPrefix + command} ${name2}.16`
  
/*let groupID = '120363043118239234@g.us'; 
let groupMetadata = await conn.groupMetadata(groupID);
let groupMembers = groupMetadata.participants.map(participant => participant.id || participant.jid); //
  
if (!groupMembers.includes(m.sender)) {
throw `*⚠️ ¿No sabes cómo usar este comando?* Antes de registrarte primero debes unirte al grupo requerido:*\nhttps://chat.whatsapp.com/HNDVUxHphPzG3cJHIwCaX5\n\n*• Después usar el comando de la siguiente manera:*\n> ${usedPrefix + command} nombre.edad`;
}*/

let [_, name, splitter, age] = text.match(Reg);
if (!name) throw '*¿Y el nombre?*'
if (!age) throw '*La edad no puede estar vacía, agrega tu edad*'
if (name.length >= 45) throw '*¿Qué?, ¿tan largo va a ser tu nombre?*'
  
age = parseInt(age);
if (age > 100) throw '👴🏻 ¡ اذهب الى قبرك !'
if (age < 5) throw '🚼 الاطفال لا يجب عليهم الدخزل? ✍️😳'

user.name = name + '✓'.trim()
//user.name = name.trim();
user.age = age;
user.regTime = +new Date();
user.registered = true;
global.db.data.users[m.sender].money += 400;
global.db.data.users[m.sender].limit += 14;
global.db.data.users[m.sender].exp += 150;
global.db.data.users[m.sender].joincount += 2;
  
let sn = createHash('md5').update(m.sender).digest('hex');
await conn.sendMessage(m.chat, { text: `[ ✅ تم التسجيل ]

◉ *الاسم:* ${name}
◉ *العمر:* ${age} سنة
◉ *الوقت:* ${time} 🇲🇦
◉ *التاريخ:* ${date}
◉ *الجنسية:* ${userNationality}
◉ *الرقم:* wa.me/${who.split`@`[0]}
◉ *الرقم التعريفي:*
⤷ ${sn}

🎁 *مكافأة:*
⤷ 14 جوهرة 💎
⤷ 400 عملة 🪙
⤷ 150 اكس بي

: الامر الاساسي لاستعمال للبوت هو
${usedPrefix}menu

◉ *عدد المستخدمين:* ${rtotalreg}

> *يمكنك رؤية بطاقتك على القناة*
${nnaa}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: ['120363359276886698@newsletter', '120363359276886698@newsletter'].getRandom(), serverMessageId: '', newsletterName: 'LoliBot ✨' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, "body": wm, "previewType": "PHOTO", thumbnail: img.getRandom(), sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom()}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//await m.reply(`${sn}`);
await conn.sendMessage(global.ch.ch1, { text: `◉ *المستخدمون:* ${m.pushName || 'غير معروف'}
◉ *الجنسية:* ${userNationality}
◉ *الاسم:* ${user.name}
◉ *العمر:* ${age} سنة
◉ *التاريخ:* ${date}
◉ *البوت:* ${wm}
◉ *Nú:*
⤷ ${sn}`, contextInfo: {
externalAdReply: {
title: "『 اشعار 📢 』",
body: "مستخدم جديد 🥳",
thumbnailUrl: ppch, 
sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom(),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}

if (command == 'nserie' || command == 'myns' || command == 'sn') {
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `⬇️ رقمك التعريفي ⬇️`, 'status@broadcast', null, fake)
}

if (command == 'unreg') {
if (!args[0]) throw `✳️ *ادخل رقمك التعريفي ل تسجيل خروجك من البوت*\n للتحقق ادخل المثال...\n\n*${usedPrefix}nالرقم التعريفي*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '⚠️ *الرقم التعريفي غلط*'
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2  
user.registered = false
conn.fakeReply(m.chat, `you are using fake reply`, '0@s.whatsapp.net', `register fake, 'status@broadcast', null, fake)
}}
handler.help = ['reg']
handler.tags = ['Account']
handler.command = /^(nserie|unreg|sn|myns|verify|verificar|registrar|reg(ister)?)$/i
export default handler
