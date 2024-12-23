let handler = async (_0x17454b, {
  conn: _0x5e7847,
  text: _0x1077dd
}) => {
  if (!_0x1077dd) {
    return _0x17454b.reply("Please enter a URL.\nمثال:\n\n .ytv https://youtube.com/watch?v=yCrmHCwo--c");
  }
  if (!_0x1077dd.includes("yout")) {
    return _0x17454b.reply(global.mess.linkinv);
  }
  const {
    key: _0xc092f8
  } = await _0x5e7847.sendMessage(_0x17454b.chat, {
    text: "```انتظر لحظة!!...\nإن لم يتم ارسال الفيديو, قد يكون حجمه كبير.```"
  }, {
    quoted: _0x17454b
  });
  try {
    const _0x385ddf = await fetchJson("https://ai.xterm.codes/api/downloader/youtube?url=" + _0x1077dd + "&type=mp4");
    const _0x4ca546 = {
      text: "```جاري الأرسال...```",
      edit: _0xc092f8
    };
    await _0x5e7847.sendMessage(_0x17454b.chat, _0x4ca546);
    const _0x35a424 = {
      url: _0x385ddf.data.dlink
    };
    const _0x2b5844 = {
      video: _0x35a424
    };
    await _0x5e7847.sendMessage(_0x17454b.chat, _0x2b5844, {
      quoted: _0x17454b
    });
    const _0x5a8366 = "```تم التنزيل```";
    const _0xfa573a = {
      text: _0x5a8366,
      edit: _0xc092f8
    };
    await _0x5e7847.sendMessage(_0x17454b.chat, _0xfa573a);
  } catch (_0x4af65d) {
    console.error(_0x4af65d.message);
    const _0x298f55 = {
      text: " خطا.\nTry a different quality.",
      edit: _0xc092f8
    };
    await _0x5e7847.sendMessage(_0x17454b.chat, _0x298f55);
  }
};
handler.help = handler.command = ["ytmp4", "ytv"];
handler.tags = ["downloader"];
export default handler;