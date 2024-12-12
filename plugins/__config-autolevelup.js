//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => imageUrl.getRandom()) 
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup) return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
user.role = global.rpg.role(user.level).name
if (before !== user.level) {
    
conn.reply(m.chat, [`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n*• NIVEL:* ${before} ⟿ ${user.level}\n*• RANGO:* ${user.role}\n\n_*Para ver tu XP en tiempo real coloca el comando #level*_`, `@${m.sender.split`@`[0]} Ohhh pa has alcanzado el siguiente nivel\n*• NIVEL:* ${before} ⟿ ${user.level}\n\n_*Para ver quien es esta el top coloca el comando #lb*_`, `Que pro @${m.sender.split`@`[0]} has alcanzado un nuevo nivel 🙌\n\n*• Nuevo nivel:* ${user.level}\n*• Nivel anterior:* ${before}\n`].getRandom(), m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})  

let niv = `*${m.pushName || 'Anónimo'}* Obtiene un nuevo nivel 🥳

*• المستوى السابق:* ${before} 
*• المستوى الحالي :* ${user.level}
*• الدور:* ${user.role}
*• بوت:* ${wm}`
let nivell = `*${m.pushName || 'Anónimo'} Haz subido un nuevo nivel 🥳*

> _*• NIVEL:* ${before} ⟿ ${user.level}_`
let nivelll = `🥳 ${m.pushName || 'Anónimo'} Que pro Acaba de alcanzar un nuevo nivel 🥳

*• Nivel:* ${before} ⟿ ${user.level}
*• Rango:* ${user.role}
*• Bot:* ${wm}`
await conn.sendMessage(global.ch.ch1, { text: [niv, nivell, nivelll].getRandom(), contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '¡Haz subido de nivel 🥳!',
thumbnailUrl: ppch, 
sourceUrl: redes.getRandom(),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}}		

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = { role: '🏅',
level: '⬆️'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
},
role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: '', level: '' };

    const role = [
        { name: 'Beginner V', level: 0 },
        { name: 'Beginner IV', level: 4 },
        { name: 'Beginner III', level: 8 },
        { name: 'Beginner II', level: 12 },
        { name: 'Beginner I', level: 16 },
        { name: 'Intermediate V', level: 20 },
        { name: 'Intermediate IV', level: 24 },
        { name: 'Intermediate III', level: 28 },
        { name: 'Intermediate II', level: 32 },
        { name: 'Intermediate I', level: 36 },
        { name: 'Advanced V', level: 40 },
        { name: 'Advanced IV', level: 44 },
        { name: 'Advanced III', level: 48 },
        { name: 'Advanced II', level: 52 },
        { name: 'Advanced I', level: 56 },
        { name: 'Expert V', level: 60 },
        { name: 'Expert IV', level: 64 },
        { name: 'Expert III', level: 68 },
        { name: 'Expert II', level: 72 },
        { name: 'Expert I', level: 76 },
        { name: 'Master V', level: 80 },
        { name: 'Master IV', level: 84 },
        { name: 'Master III', level: 88 },
        { name: 'Master II', level: 92 },
        { name: 'Master I', level: 96 },
        { name: 'Grandmaster V', level: 100 },
        { name: 'Grandmaster IV', level: 104 },
        { name: 'Grandmaster III', level: 108 },
        { name: 'Grandmaster II', level: 112 },
        { name: 'Grandmaster I', level: 116 }
    ];

    const current = role.reverse().find(r => r.level <= level) || {};
    return { name: current.name || '', level: level };
}
