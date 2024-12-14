import fs from 'fs';

let handler = async (m, { conn, text }) => {  
    // جلب جميع الدردشات
    let chatsall = Object.keys(conn.chats); // جميع الدردشات
    let totalChats = chatsall.length;

    // التحقق من النص المُرسل أو الرسالة المقتبسة
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false;
    let teks = text ? text : cc ? cc.text : '';
    
    if (!teks) {
        return m.reply('⚠️ الرجاء إدخال نص لإرساله.');
    }

    if (totalChats === 0) {
        return m.reply('⚠️ لا توجد دردشات لإرسال الرسائل إليها.');
    }

    // تحديد عدد الدردشات المستهدفة (1000)
    let targetChats = chatsall.slice(0, 1000);

    m.reply(`[❗️INFO❗️] سيتم إرسال الإعلان إلى أول ${targetChats.length} دردشة.\n\n*يرجى الانتظار حتى اكتمال العملية.*`);

    for (let i = 0; i < targetChats.length; i++) {
        let id = targetChats[i];
        
        try {
            await conn.sendMessage(id, { 
                text: `JEEN-MD\n *https://whatsapp.com/channel/0029Valkz9f2P59m5mtUqA1j*\n┃ ⛥│${teks}\n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷`,
            }, { quoted: m });

            console.log(`✅ تم إرسال الرسالة إلى الدردشة رقم ${i + 1}/${targetChats.length} (ID: ${id})`);
        } catch (e) {
            console.error(`❌ خطأ في إرسال الرسالة إلى ${id}:`, e.message);
        }

        // الانتظار لمدة ثانيتين بين كل رسالة
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    m.reply(`[✅INFO] تم إرسال الإعلان إلى ${targetChats.length} دردشة بنجاح!`);
};

// الإعدادات
handler.help = ['broadcast', 'bc'].map(v => v + ' <النص>');
handler.tags = ['owner'];
handler.command = /^(broadcast|bc)$/i;
handler.rowner = true;

export default handler;