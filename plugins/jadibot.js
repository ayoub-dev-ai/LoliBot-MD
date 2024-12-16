import fs from "fs";

let handler = async (m, { conn, usedPrefix }, args, command) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let randomId = Math.random().toString(36).substring(2, 12); // Generates a 10-character random ID
  if (global.conn.user.jid == conn.user.jid) {
    conn.reply(m.chat, '*Este comando es solo para sub bots*', m);
  } else {
    global.conns.push(conn);
    await conn.sendMessage(
      m.chat, 
      { 
        text: usedPrefix + 'jadibot' + " " + Buffer.from(fs.readFileSync(`./jadibts/${randomId}/creds.json`), "utf-8").toString("base64") 
      }, 
      { quoted: m }
    );
  }
};

handler.help = ['getcode'];
handler.tags = ['jadibot'];
handler.command = /^(codetoken)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = true;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;

export default handler;