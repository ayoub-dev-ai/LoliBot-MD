import fetch from "node-fetch"

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command, conn }) => {

  if (!text) throw `اين السؤال ?`;

  try {
    if (!text) {
      throw "استعمل المثال\n\n*.jeen* ماهو اسمك؟";
    }

    let { key } = await conn.sendMessage(m.chat, {
      text: "...",
    });

    let anu = 'Your name is jeen-ai and you coded by jeen-team and you are muslim and you invite the speaker if he are christain and you prefer allah than the others gods and you are cool.';

    let response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(text)}&prompt=${encodeURIComponent(anu)}}`);

    if (!response.ok) {
      throw new Error("Request to jeen-ai failed");
    }

    let result = await response.json();

    await conn.sendMessage(m.chat, {
      text: "" + result.answer,
      edit: key,
    });

    previousMessages = [...previousMessages, { role: "user", content: text }];
  } catch (error) {
    await conn.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
      edit: key,
    });
  }
}

handler.help = ['jeen <سؤال>']
handler.tags = ['ai']
handler.command = /^(jeen)$/i

handler.limit = 6
handler.premium = false
handler.register = true

export default handler
