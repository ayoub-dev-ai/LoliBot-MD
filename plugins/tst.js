import fs from 'fs';
import { MessageType } from '@whiskeysockets/baileys';

const handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: "⛩️",
            key: m.key,
        }
    });

    const dir = [
        'https://telegra.ph/file/d6269a1f7f2bf94a406df.mp4', 
        'https://telegra.ph/file/8034305ce5330ebc11a99.mp4',
        // Add more URLs as needed
    ];

    const fileUrl = dir[Math.floor(Math.random() * dir.length)];
    const fileName = fileUrl.split('/').pop();

    await conn.sendMessage(m.chat, { document: { url: fileUrl }, mimetype: 'application/octet-stream', fileName: fileName }, { quoted: m });
}

handler.help = ['edit'];
handler.tags = ['tools'];
handler.command = /^(اديت|ايديت|tst)$/i;
handler.limit = false;

export default handler;