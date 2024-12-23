/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El codigo de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
*/

const {
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion
} = await import(global.baileys);
import _0x3273bc from "qrcode";
import _0x233879 from "node-cache";
import _0x42f252 from "fs";
import _0x351bb8 from "path";
import _0x29a17d from "pino";
import _0x131ed1 from "util";
import * as _0xbda81a from "ws";
const {
  child,
  spawn,
  exec
} = await import("child_process");
const {
  CONNECTING
} = _0xbda81a;
import { makeWASocket } from "../lib/simple.js";
let check1 = "NjBhZGVmZWI4N2M2";
let check2 = "ZThkMmNkOGVlMDFmZD";
let check3 = "UzYTI1MTQgIGluZ";
let check4 = "m8tZG9uYXIuanMK";
let check5 = "NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO";
let check6 = "DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz";
let check8 = "NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo";
let crm1 = "Y2QgcGx1Z2lucy";
let crm2 = "A7IG1kNXN1b";
let crm3 = "SBpbmZvLWRvbmFyLmpz";
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz";
let drm1 = "CkphZGlib3QsIEhlY2hv";
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM";
let rtx = "*🔰 Edgar-MD 🔰*\nㅤㅤㅤㅤ*QR*\n\n*باستخدام هاتف آخر لديك أو على جهاز الكمبيوتر، قم بمسح QR هذا ليصبح روبوتًا فرعيًا*\n\n*1. انقر على النقاط الثلاث في الزاوية اليمنى العليا*\n*2. اضغط على واتساب ويب*\n*3. قم بمسح رمز الاستجابة السريعة هذا*\n*تنتهي صلاحية رمز الاستجابة السريعة هذا خلال 45 ثانية!*\n\n> *⚠️ نحن غير مسؤولين عن أي سوء استخدام قد يعطى له أو في حال إرسال الرقم للدعم...عليك واجب الالتزام بالشروط والأحكام والخصوصية حرفيا (اكتب ذلك وسيتم إعطاؤه لك)*";
let rtx2 = "🟢 *_Pairing_* 🟢\n\n*1️⃣ توجه إلى النقاط الثلاث في الزاوية اليمنى العليا*\n*2️⃣ انتقل إلى خيار الأجهزة المرتبطة*\n*3️⃣ انقر على الرابط مع رمز الهاتف*\n*4️⃣ الصق الكود أدناه*\n\n> *⚠️ نحن غير مسؤولين عن أي سوء استخدام قد يعطى له أو في حال إرسال الرقم للدعم...عليك واجب اتباع الشروط والأحكام والخصوصية (يرجى اعادة توجيه الرسالة القادمية الي).*";
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
let handler = async (_0x5dc7f8, {
  conn: _0x46fb82,
  args: _0x26550f,
  usedPrefix: _0x39a2c8,
  command: _0x47cb36,
  isOwner: _0x59bcb5
}) => {
  let _0x4e1c2c = _0x46fb82;
  const _0x2b7f1c = _0x26550f[0] && /(--code|code)/.test(_0x26550f[0].trim()) ? true : _0x26550f[1] && /(--code|code)/.test(_0x26550f[1].trim()) ? true : false;
  let _0x214678;
  let _0x35baea;
  let _0x47379d;
  let _0x5f2ace = global.db.data.users[_0x5dc7f8.sender];
  let _0x154f42 = _0x5dc7f8.mentionedJid && _0x5dc7f8.mentionedJid[0] ? _0x5dc7f8.mentionedJid[0] : _0x5dc7f8.fromMe ? _0x4e1c2c.user.jid : _0x5dc7f8.sender;
  let _0x3b3505 = "" + _0x154f42.split`@`[0];
  if (_0x2b7f1c) {
    _0x26550f[0] = _0x26550f[0].replace(/^--code$|^code$/, "").trim();
    if (_0x26550f[1]) {
      _0x26550f[1] = _0x26550f[1].replace(/^--code$|^code$/, "").trim();
    }
    if (_0x26550f[0] == "") {
      _0x26550f[0] = undefined;
    }
  }
  if (!_0x42f252.existsSync("./jadibts/" + _0x3b3505)) {
    _0x42f252.mkdirSync("./jadibts/" + _0x3b3505, {
      recursive: true
    });
  }
  if (_0x26550f[0] && _0x26550f[0] != undefined) {
    _0x42f252.writeFileSync("./jadibts/" + _0x3b3505 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x26550f[0], "base64").toString("utf-8")), null, "\t"));
  } else {
    "";
  }
  if (_0x42f252.existsSync("./jadibts/" + _0x3b3505 + "/creds.json")) {
    let _0x5867d6 = JSON.parse(_0x42f252.readFileSync("./jadibts/" + _0x3b3505 + "/creds.json"));
    if (_0x5867d6) {
      if (_0x5867d6.registered = false) {
        _0x42f252.unlinkSync("./jadibts/" + _0x3b3505 + "/creds.json");
      }
    }
  }
  const _0x53088f = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64");
  exec(_0x53088f.toString("utf-8"), async (_0x116b0d, _0x444659, _0x5fce62) => {
    const _0x376019 = Buffer.from(drm1 + drm2, "base64");
    async function _0x55fb84() {
      let _0x156f14 = _0x5dc7f8.mentionedJid && _0x5dc7f8.mentionedJid[0] ? _0x5dc7f8.mentionedJid[0] : _0x5dc7f8.fromMe ? _0x4e1c2c.user.jid : _0x5dc7f8.sender;
      let _0x3f1d2c = "" + _0x156f14.split`@`[0];
      if (!_0x42f252.existsSync("./jadibts/" + _0x3f1d2c)) {
        _0x42f252.mkdirSync("./jadibts/" + _0x3f1d2c, {
          recursive: true
        });
      }
      if (_0x26550f[0]) {
        _0x42f252.writeFileSync("./jadibts/" + _0x3f1d2c + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x26550f[0], "base64").toString("utf-8")), null, "\t"));
      } else {
        "";
      }
      let {
        version: _0x3e4fbb,
        isLatest: _0x73fd10
      } = await fetchLatestBaileysVersion();
      const _0x1236ab = _0x1a89cf => {};
      const _0x3ac438 = new _0x233879();
      const {
        state: _0x685d73,
        saveState: _0x5bd3c9,
        saveCreds: _0x19b9bd
      } = await useMultiFileAuthState("./jadibts/" + _0x3f1d2c);
      const _0x66e88f = {
        printQRInTerminal: false,
        logger: _0x29a17d({
          level: "silent"
        }),
        auth: {
          creds: _0x685d73.creds,
          keys: makeCacheableSignalKeyStore(_0x685d73.keys, _0x29a17d({
            level: "silent"
          }))
        },
        msgRetry: _0x1236ab,
        msgRetryCache: _0x3ac438,
        version: [2, 3000, 1015901307],
        syncFullHistory: true,
        browser: _0x2b7f1c ? ["Ubuntu", "Chrome", "110.0.5585.95"] : ["Edgar-MD (SubBot)", "Chrome", "2.0.0"],
        defaultQueryTimeoutMs: undefined,
        getMessage: async _0x330330 => {
          if (store) {}
          return {
            conversation: "Edgar-MD"
          };
        }
      };
      let _0x2b89c6 = makeWASocket(_0x66e88f);
      _0x2b89c6.isInit = false;
      let _0x4a6b81 = true;
      async function _0x3d8adb(_0x49c8ab) {
        const {
          connection: _0x3d81f9,
          lastDisconnect: _0xa9c63b,
          isNewLogin: _0x41d868,
          qr: _0x46fc01
        } = _0x49c8ab;
        if (_0x41d868) {
          _0x2b89c6.isInit = false;
        }
        if (_0x46fc01 && !_0x2b7f1c) {
          try {
            _0x47379d = await _0x4e1c2c.sendMessage(_0x5dc7f8.chat, {
              image: await _0x3273bc.toBuffer(_0x46fc01, {
                scale: 8
              }),
              caption: rtx + "\n" + _0x376019.toString("utf-8")
            }, {
              quoted: _0x5dc7f8
            });
            setTimeout(async () => {
              try {
                if (_0x47379d && _0x47379d.key) {
                  await _0x4e1c2c.sendMessage(_0x5dc7f8.sender, {
                    delete: _0x47379d.key
                  });
                }
              } catch (_0x11a8fa) {
                console.error("Error al borrar el mensaje del QR:", _0x11a8fa);
              }
            }, 30000);
          } catch (_0x5b851d) {
            console.error("Error al enviar el mensaje con QR:", _0x5b851d);
          }
          return;
        }
        if (_0x46fc01 && _0x2b7f1c) {
          try {
            _0x214678 = await _0x4e1c2c.sendMessage(_0x5dc7f8.chat, {
              text: rtx2 + "\n" + _0x376019.toString("utf-8")
            }, {
              quoted: _0x5dc7f8
            });
            await sleep(3000);
            let _0x41c6d1 = await _0x2b89c6.requestPairingCode(_0x5dc7f8.sender.split`@`[0]);
            _0x35baea = await _0x5dc7f8.reply(_0x41c6d1);
            setTimeout(async () => {
              try {
                if (_0x214678 && _0x214678.key) {
                  await _0x4e1c2c.sendMessage(_0x5dc7f8.sender, {
                    delete: _0x214678.key
                  });
                }
              } catch (_0x35d3db) {
                console.error("Error:", _0x35d3db);
              }
            }, 30000);
            setTimeout(async () => {
              try {
                if (_0x35baea && _0x35baea.key) {
                  await _0x4e1c2c.sendMessage(_0x5dc7f8.sender, {
                    delete: _0x35baea.key
                  });
                }
              } catch (_0x4c54f2) {
                console.error("خطا في الحصول على الكود:", _0x4c54f2);
              }
            }, 30000);
          } catch (_0xa6a504) {
            console.error("خطا في الحصول على الرمز:", _0xa6a504);
          }
        }
        const _0x55a77f = _0xa9c63b?.error?.output?.statusCode || _0xa9c63b?.error?.output?.payload?.statusCode;
        console.log(_0x55a77f);
        const _0x47328f = async _0xcf33a5 => {
          if (!_0xcf33a5) {
            try {
              _0x2b89c6.ws.close();
            } catch (_0x3c69be) {
              console.error("error:", _0x3c69be);
            }
            _0x2b89c6.ev.removeAllListeners();
            let _0x30798e = global.conns.indexOf(_0x2b89c6);
            if (_0x30798e < 0) {
              return;
            }
            delete global.conns[_0x30798e];
            global.conns.splice(_0x30798e, 1);
          }
        };
        const _0x469ed6 = _0xa9c63b?.error?.output?.statusCode || _0xa9c63b?.error?.output?.payload?.statusCode;
        if (_0x3d81f9 === "close") {
          console.log(_0x469ed6);
          if (_0x469ed6 == 405) {
            await _0x42f252.unlinkSync("./jadibts/" + _0x3f1d2c + "/creds.json");
            return await _0x5dc7f8.reply("*🟢 أعد إرسال الأمر مرة أخرى....*");
          }
          if (_0x469ed6 === DisconnectReason.restartRequired) {
            _0x55fb84();
            return console.log("⚠️ تم استبدال الاتصال، وتم فتح جلسة جديدة أخرى، يرجى إغلاق الجلسة الحالية أولاً");
          } else if (_0x469ed6 === DisconnectReason.loggedOut) {
            sleep(4000);
            return _0x5dc7f8.reply("🔴 *تم إغلاق الاتصال، وسيتعين عليك إعادة الاتصال باستخدام:*\n#deletesesion (لحذف البيانات والتمكن من العودة إلى QR أو الرمز وحده)");
          } else if (_0x469ed6 == 428) {
            await _0x47328f(false);
            return _0x5dc7f8.reply("🟡 *تم إغلاق الاتصال بشكل غير متوقع، سنحاول إعادة الاتصال...*");
          } else if (_0x469ed6 === DisconnectReason.connectionLost) {
            await _0x55fb84();
            return console.log("⚠️ CONEXIÓN PERDIDA CON EL SERVIDOR, RECONECTANDO...");
          } else if (_0x469ed6 === DisconnectReason.badSession) {
            return await _0x5dc7f8.reply("🔴 *تم إغلاق الاتصال، يجب عليك الاتصال يدويًا باستخدام الأمر .serbot وإعادة مسح رمز الاستجابة السريعة الجديد*");
          } else if (_0x469ed6 === DisconnectReason.timedOut) {
            await _0x47328f(false);
            return console.log("⌛ انتهت مهلة الاتصال، جارٍ إعادة الاتصال....");
          } else {
            console.log("⚠️❗ سبب قطع الاتصال غير معروف: " + (_0x469ed6 || "") + " >> " + (_0x3d81f9 || ""));
          }
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x3d81f9 == "open") {
          _0x2b89c6.isInit = true;
          global.conns.push(_0x2b89c6);
          await _0x4e1c2c.sendMessage(_0x5dc7f8.chat, {
            text: _0x26550f[0] ? "*✅ إنه متصل بالفعل!!  يرجى الانتظار إذا كان محمل الرسائل هذا!! .....*" : "*تم الاتصال بنجاح مع الواتساب ✅*\n\n*💻 Bot:* +" + _0x5dc7f8.sender.split`@`[0] + "\n*👤 Dueño:* " + (_0x5dc7f8.pushName || "Anónimo") + "\n\n*ملحوظة:هذا مؤقت*\nإذا تمت إعادة تشغيل البوت الرئيسي أو تعطيله، فسيتم إعادة تعيين جميع الروبوتات الفرعية أيضًا.\n\n> *انضم إلى قناتنا لمعرفة كل التحديثات/الأخبار حول الروبوت*\n" + nna2
          }, {
            quoted: _0x5dc7f8
          });
          let _0x128aff = ("* تم اكتشاف بوت جديد 💻✨*\n\n*✨ الرقم :* wa.me/" + _0x5dc7f8.sender.split`@`[0] + "\n*👤 المالك :* " + (_0x5dc7f8.pushName || "Ayoub-Dev") + "\n*🔑 طريقة التشغيل :* " + (_0x2b7f1c ? "الربط بالكود" : "المسح الرمز") + "\n*💻 المتصفح :* " + (_0x2b7f1c ? "Ubuntu" : "Chrome") + "\n").trim();
          let _0x3735ba = await _0x2b89c6.profilePictureUrl(_0x156f14, "image").catch(_0x35357a => imageUrl.getRandom());
          await sleep(3000);
          await _0x4e1c2c.sendMessage(ch.ch1, {
            text: _0x128aff,
            contextInfo: {
              externalAdReply: {
                title: "【 📢 اشعار عام 📢 】",
                body: "🥳 ¡تم اتصال بوت جديد!",
                thumbnailUrl: _0x3735ba,
                sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom(),
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: false
              }
            }
          }, {
            quoted: null
          });
          await sleep(3000);
          await joinChannels(_0x2b89c6);
          if (!_0x26550f[0]) {
            _0x4e1c2c.sendMessage(_0x5dc7f8.chat, {
              text: _0x39a2c8 + _0x47cb36 + " " + Buffer.from(_0x42f252.readFileSync("./jadibts/" + _0x3f1d2c + "/creds.json"), "utf-8").toString("base64")
            }, {
              quoted: _0x5dc7f8
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x2b89c6.user) {
          try {
            _0x2b89c6.ws.close();
          } catch (_0x23c849) {
            console.log(await _0x10642a(true).catch(console.error));
          }
          _0x2b89c6.ev.removeAllListeners();
          let _0x373c67 = global.conns.indexOf(_0x2b89c6);
          if (_0x373c67 < 0) {
            return;
          }
          delete global.conns[_0x373c67];
          global.conns.splice(_0x373c67, 1);
        }
      }, 60000);
      let _0x1d6336 = await import("../handler.js");
      let _0x10642a = async function (_0x1c420d) {
        try {
          const _0x1e6e31 = await import("../handler.js?update=" + Date.now()).catch(console.error);
          if (Object.keys(_0x1e6e31 || {}).length) {
            _0x1d6336 = _0x1e6e31;
          }
        } catch (_0x36b3b2) {
          console.error(_0x36b3b2);
        }
        if (_0x1c420d) {
          const _0x3a44e0 = _0x2b89c6.chats;
          try {
            _0x2b89c6.ws.close();
          } catch {}
          _0x2b89c6.ev.removeAllListeners();
          _0x2b89c6 = makeWASocket(_0x66e88f, {
            chats: _0x3a44e0
          });
          _0x4a6b81 = true;
        }
        if (!_0x4a6b81) {
          _0x2b89c6.ev.off("messages.upsert", _0x2b89c6.handler);
          _0x2b89c6.ev.off("group-participants.update", _0x2b89c6.participantsUpdate);
          _0x2b89c6.ev.off("groups.update", _0x2b89c6.groupsUpdate);
          _0x2b89c6.ev.off("message.delete", _0x2b89c6.onDelete);
          _0x2b89c6.ev.off("call", _0x2b89c6.onCall);
          _0x2b89c6.ev.off("connection.update", _0x2b89c6.connectionUpdate);
          _0x2b89c6.ev.off("creds.update", _0x2b89c6.credsUpdate);
        }
        _0x2b89c6.welcome = global.conn.welcome + "";
        _0x2b89c6.bye = global.conn.bye + "";
        _0x2b89c6.spromote = global.conn.spromote + "";
        _0x2b89c6.sdemote = global.conn.sdemote + "";
        _0x2b89c6.sDesc = global.conn.sDesc + "";
        _0x2b89c6.sSubject = global.conn.sSubject + "";
        _0x2b89c6.sIcon = global.conn.sIcon + "";
        _0x2b89c6.sRevoke = global.conn.sRevoke + "";
        _0x2b89c6.handler = _0x1d6336.handler.bind(_0x2b89c6);
        _0x2b89c6.participantsUpdate = _0x1d6336.participantsUpdate.bind(_0x2b89c6);
        _0x2b89c6.groupsUpdate = _0x1d6336.groupsUpdate.bind(_0x2b89c6);
        _0x2b89c6.onDelete = _0x1d6336.deleteUpdate.bind(_0x2b89c6);
        _0x2b89c6.onCall = _0x1d6336.callUpdate.bind(_0x2b89c6);
        _0x2b89c6.connectionUpdate = _0x3d8adb.bind(_0x2b89c6);
        _0x2b89c6.credsUpdate = _0x19b9bd.bind(_0x2b89c6, true);
        const _0x3e5ed1 = new Date();
        const _0x3385d2 = new Date(_0x2b89c6.ev * 1000);
        if (_0x3e5ed1.getTime() - _0x3385d2.getTime() <= 300000) {
          console.log("Leyendo mensaje entrante:", _0x2b89c6.ev);
          Object.keys(_0x2b89c6.chats).forEach(_0x104b43 => {
            _0x2b89c6.chats[_0x104b43].isBanned = false;
          });
        } else {
          console.log(_0x2b89c6.chats, "Omitiendo mensajes en espera.", _0x2b89c6.ev);
          Object.keys(_0x2b89c6.chats).forEach(_0x167aa1 => {
            _0x2b89c6.chats[_0x167aa1].isBanned = true;
          });
        }
        _0x2b89c6.ev.on("messages.upsert", _0x2b89c6.handler);
        _0x2b89c6.ev.on("group-participants.update", _0x2b89c6.participantsUpdate);
        _0x2b89c6.ev.on("groups.update", _0x2b89c6.groupsUpdate);
        _0x2b89c6.ev.on("message.delete", _0x2b89c6.onDelete);
        _0x2b89c6.ev.on("call", _0x2b89c6.onCall);
        _0x2b89c6.ev.on("connection.update", _0x2b89c6.connectionUpdate);
        _0x2b89c6.ev.on("creds.update", _0x2b89c6.credsUpdate);
        _0x4a6b81 = false;
        return true;
      };
      _0x10642a(false);
    }
    _0x55fb84();
  });
};
handler.help = ["jadibot", "serbot", "getcode", "rentbot"];
handler.tags = ["jadibot"];
handler.command = /^(jadibot|serbot|rentbot)/i;
handler.register = true;
export default handler;
const delay = _0x45b1a1 => new Promise(_0x4ea28d => setTimeout(_0x4ea28d, _0x45b1a1));
function sleep(_0x2338b7) {
  return new Promise(_0x3a5a2c => setTimeout(_0x3a5a2c, _0x2338b7));
}
async function joinChannels(_0x1f0d83) {
  for (const _0x422adf of Object.values(global.ch)) {
    await _0x1f0d83.newsletterFollow(_0x422adf).catch(() => {});
  }
}{});
  }
  }
