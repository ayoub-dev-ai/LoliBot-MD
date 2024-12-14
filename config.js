import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['212710723716', 'Ayoub', true], ['212641207087']]
global.mods = []
global.prems = ['212671768179']

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV2"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://deliriussapi-oficial.vercel.app'

global.APIs = {xteam: 'https://api.xteam.xyz', 
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api-fgmods.ddns.net',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site' },
global.APIKeys = {'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren' }

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'Jeen-MD'
global.author = 'Jeen-MD'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = 'ᴊᴇᴇɴ-ʙᴏᴛ'
global.botname = 'ᴊᴇᴇɴ-ʙᴏᴛ' 
global.botname = 'ᴊᴇᴇɴ-ᴍᴅ'
global.vs = '1.9.5'
global.yt = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j'
global.tiktok = 'https://whatsapp.com/channel/0029VazoyzxGehEP23PoDP45'
global.md = 'https://whatsapp.com/channel/0029Vb09v4M4inojHxaUYP0k'
global.fb = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j'
global.face = 'https://whatsapp.com/channel/0029VazoyzxGehEP23PoDP45'

global.nna = 'https://whatsapp.com/channel/0029Vb09v4M4inojHxaUYP0k' //Update
global.nna2 = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j' //LoliBot update
global.nnaa = 'https://whatsapp.com/channel/0029VazoyzxGehEP23PoDP45' //LoliBot - Test
global.nn = 'https://whatsapp.com/channel/0029Vb09v4M4inojHxaUYP0k' //Grupo 1
global.nnn = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j' //Grupo 2
global.nnnt = 'https://whatsapp.com/channel/0029VazoyzxGehEP23PoDP45' //Grupo del Colaboracion
global.nnnt2 = 'https://whatsapp.com/channel/0029Vb09v4M4inojHxaUYP0k' //  COL 2
global.nnntt = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j' //Grupo COL 3
global.nnnttt = 'https://whatsapp.com/channel/0029VazoyzxGehEP23PoDP45' //enlace lolibot
global.nnntttt = 'https://whatsapp.com/channel/0029Vb09v4M4inojHxaUYP0k' //Grupo ayuda sobre el bot
global.bot = 'https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j'
global.asistencia = `${fb}`
global.redes = [nna, nna2, yt, nn, md, tiktok, fb, nnn, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = 'الرجاء الانتظار لحظة\n\n> *Jeen-MD*'
global.waitt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _ᴡᴀɪᴛ ᴘʟᴇᴀsᴇ..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ النتائج ✅』\n\n'
global.resultado = rg
global.ag = '『⚠️ ملاحظة ⚠️』\n\n'
global.advertencia = ag
global.iig = '『❕ معلومة 』\n\n'
global.informacion = iig
global.fg = '『❌ خطا ❌』\n\n'
global.fallo = fg
global.mg = '『❗️ معلونة❗』\n\n'
global.mal = mg
global.eeg = '『📩 ابلاغ 📩』\n\n'
global.envio = eeg
global.eg = '『💚 تم بنجاح 💚』\n\n'
global.exito = eg

//-------------------------[ IMAGEN ]------------------------------
//global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/Hvjxc.jpg'
global.img2 = 'https://qu.ax/Hvjxc.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/Hvjxc.jpg'
global.imagen6 = 'https://qu.ax/Hvjxc.jpg'
global.menu18 = 'https://qu.ax/Hvjxc.jpg'
global.vid1 = 'https://qu.ax/Hvjxc.jpg'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://qu.ax/Hvjxc.jpg", "https://qu.ax/Hvjxc.jpg", "https://qu.ax/Hvjxc.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363372688988248@newsletter', 
ch2: '120363372688988248@newsletter', 
ch3: '120363372688988248@newsletter',
ch4: '120363372688988248@newsletter',
ch5: '120363372688988248@newsletter', 
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
