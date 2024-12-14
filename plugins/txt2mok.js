import _0x3c3b3b from "node-fetch";
let handler = async (_0x442252, {
  conn: _0x25767c,
  text: _0x4c9ceb
}) => {
  if (!_0x4c9ceb) {
    throw "يرجى إدخال وصف/نص الفيديو\n\n.txt2video sad story";
  }
  try {
    _0x442252.reply("قد يستغرق الأمر بعض الوقت حتى يتم إرسال الفيديو");
    let _0xe2b090 = new Vidnoz();
    let _0x1b2337 = await _0xe2b090.textToVideo(_0x4c9ceb, "Relaxing", 0, 2, 206);
    await _0x25767c.delay(300000);
    let _0xbc699c = await _0xe2b090.getTask(_0x1b2337);
    const _0xaf1e3a = {
      url: _0xbc699c.additional_data.video_url
    };
    await _0x25767c.sendMessage(_0x442252.chat, {
      video: _0xaf1e3a,
      caption: "`" + _0x4c9ceb + "`\n< Jeen-MD\n\n⏳: " + _0xbc699c.additional_data.duration + " *ثانية*",
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: _0xbc699c.action,
          body: _0xbc699c.additional_data.video_url,
          mediaType: 1,
          thumbnail: await (await _0x25767c.getFile(_0xbc699c.additional_data.thumbnail_url)).data,
          sourceUrl: _0xbc699c.additional_data.video_url
        }
      }
    }, {
      quoted: _0x442252
    });
  } catch (_0xcd114e) {
    throw new Error("حدث خطأ: " + _0xcd114e.message);
  }
};
handler.help = handler.command = ["txt2video"];
handler.tags = ["ai"];
export default handler;
const ip = () => {
  const _0x102cd2 = () => Math.floor(Math.random() * 256);
  return _0x102cd2() + "." + _0x102cd2() + "." + _0x102cd2() + "." + _0x102cd2();
};
class Vidnoz {
  constructor(_0x438ccf) {
    this.authToken = _0x438ccf || null;
    this.apiBaseUrl = "https://tool-api.vidnoz.com/ai/tool";
  }
  async getHeaders() {
    return {
      "Content-Type": "application/json",
      "X-TASK-VERSION": "2.0.0",
      Authorization: "Bearer " + this.authToken,
      "x-forwarded-for": ip()
    };
  }
  async postData(_0x43885e = "", _0x51f372 = {}) {
    const _0x4681dd = await this.getHeaders();
    const _0x3ceb19 = await _0x3c3b3b(_0x43885e, {
      method: "POST",
      headers: _0x4681dd,
      body: JSON.stringify(_0x51f372)
    });
    return _0x3ceb19.json();
  }
  async textToVideo(_0x81ce46, _0xcf08f1, _0xd96ea6, _0x21618e, _0x21bfe0) {
    try {
      const _0x27ccf7 = {
        text: _0x81ce46,
        make_background_music: _0xcf08f1,
        subtitles: _0xd96ea6,
        voiceOver_gender: _0x21618e,
        voiceOver_voice: _0x21bfe0,
        language: "EN"
      };
      const _0x1ed9a4 = _0x27ccf7;
      const _0xa15ea7 = await this.postData(this.apiBaseUrl + "/text-to-video", _0x1ed9a4);
      return _0xa15ea7.data.task_id;
    } catch (_0xcb2d87) {
      throw new Error("Error creating video: " + _0xcb2d87.message);
    }
  }
  async getTask(_0x582ee6) {
    try {
      const _0x221d8b = {
        id: _0x582ee6
      };
      const _0x2c311b = _0x221d8b;
      let _0x2fa887;
      do {
        let _0x18254c = await this.postData(this.apiBaseUrl + "/get-task", _0x2c311b);
        _0x2fa887 = _0x18254c.data;
        if (_0x2fa887.status === -2) {
          await new Promise(_0x3ec3fe => setTimeout(_0x3ec3fe, 5000));
        }
      } while (_0x2fa887.status === -2);
      return _0x2fa887;
    } catch (_0x3f46ba) {
      throw new Error("Error fetching task: " + _0x3f46ba.message);
    }
  }
}
