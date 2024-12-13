// تأكد من وجود نص أو رسالة مرفقة (اقتباس أو صورة)
    if (!text && !m.quoted && !m.mtype.includes('imageMessage')) {
      throw "أدخل سؤالاً أو أرسل صورة لوصفها!\n\n*مثال:* من هو رئيس إندونيسيا؟";
    }

    // إرسال رسالة "جاري المعالجة"
    let { key } = await conn.sendMessage(m.chat, {
      text: "...",
    });

    let imgUrl = null; // متغير لتخزين رابط الصورة إذا كانت موجودة.

    // إذا كانت الرسالة المقتبسة تحتوي على صورة، قم بتحميلها
    if (m.quoted && m.quoted.mtype === 'imageMessage') {
      let img = await m.quoted.download(); // تنزيل الصورة.
      if (img) {
        imgUrl = await uploadFile(img); // رفع الصورة إلى خادم.
        if (!imgUrl) {
          throw "فشل في تحميل الصورة. تأكد من أن عملية التحميل تعمل بشكل صحيح.";
        }
      }
    } 
    // إذا كانت الرسالة الحالية تحتوي على صورة
    else if (m.mtype.includes('imageMessage')) {
      let img = await m.download(); // تنزيل الصورة.
      if (img) {
        imgUrl = await uploadFile(img); // رفع الصورة إلى خادم.
        if (!imgUrl) {
          throw "فشل في تحميل الصورة. تأكد من أن عملية التحميل تعمل بشكل صحيح.";
        }
      }
    }

    // تحديد رابط واجهة برمجة التطبيقات بناءً على النص والصورة
    let apiUrl;
    if ((!text && m.quoted) || (text && m.quoted) || (text && m.mtype.includes('imageMessage'))) {
      apiUrl = `https://api.ryzendesu.vip/api/ai/blackbox?chat=${encodeURIComponent(text || '')}&options=blackboxai&imageurl=${imgUrl}`;
    } else if (text && !m.quoted) {
      apiUrl = `https://api.ryzendesu.vip/api/ai/blackbox?chat=${encodeURIComponent(text)}&options=blackboxai`;
    }

    // إرسال طلب إلى واجهة برمجة التطبيقات
    let hasil = await fetch(apiUrl); // إرسال الطلب.
    if (!hasil.ok) {
      throw new Error("فشل الطلب إلى واجهة برمجة التطبيقات");
    }

    let result = await hasil.json(); // تحويل الرد إلى JSON.

    // إنشاء رسالة الرد بناءً على الرد من واجهة برمجة التطبيقات
    let responseMessage = result.response || "لا يوجد رد من الذكاء الاصطناعي.";
    
    // إضافة معلومات إضافية إذا كانت متوفرة
    if (result.additionalInfo && result.additionalInfo.length > 0) {
      responseMessage += "\n\n**معلومات إضافية:**\n";
      result.additionalInfo.forEach(info => {
        responseMessage += `- [${info.title}](${info.link}): ${info.snippet}\n`;
        if (info.sitelinks && info.sitelinks.length > 0) {
          info.sitelinks.forEach(link => {
            responseMessage += `  - [${link.title}](${link.link})\n`;
          });
        }
      });
    }

    // إرسال الرسالة النهائية إلى المستخدم
    await conn.sendMessage(m.chat, {
      text: responseMessage,
      edit: key,
    });

    // تخزين الرسالة النصية السابقة
    previousMessages.push({ role: "user", content: text || '[Image]' });
  } catch (error) {
    // إرسال رسالة خطأ إذا حدث استثناء
    await conn.sendMessage(m.chat, {
      text: `خطأ: ${error.message}`,
      edit: key,
    });
  }
}

// إعدادات الأمر
handler.help = ['blackbox'] // مساعدة
handler.tags = ['ai'] // تصنيف
handler.command = /^(blackbox)$/i // اسم الأمر

handler.limit = 8 // حد الاستخدام
handler.premium = false // لا يتطلب حسابًا مميزًا
handler.register = true // يتطلب تسجيل المستخدم

export default handler // تصدير المعالج
