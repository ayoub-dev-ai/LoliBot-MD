import fetch from "node-fetch";

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command, conn }) => {

  if (!text) throw `اين السؤال ?`;

  try {
    if (!text) {
      throw "استعمل المثال\n\n*.jeen* ماهو اسمك؟";
    }

    // Send a loading message first
    await conn.sendMessage(m.chat, {
      text: "...",
    });

    let anu = 'Your name is jeen-ai and you coded by jeen-team and you are muslim and you invite the speaker if he are christain and you prefer allah than the others gods and you are cool.';

    // Send a request to the API
    let response = await fetch(`https://bk9.fun/ai/BK9?BK9=${encodeURIComponent(anu)}&q=${encodeURIComponent(text)}&model=gpt-3.5-turbo`);

    if (!response.ok) {
      throw new Error("Request to jeen-ai failed");
    }

    let result = await response.json();

    // Send the response message without editing any previous message
    await conn.sendMessage(m.chat, {
      text: "" + result.answer,
    });

    previousMessages = [...previousMessages, { role: "user", content: text }];
  } catch (error) {
    // Send an error message if something goes wrong
    await conn.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
};

handler.help = ['jeen <سؤال>'];
handler.tags = ['ai'];
handler.command = /^(jeen)$/i;

handler.limit = 6;
handler.premium = false;
handler.register = true;

export default handler;