const axios = require('axios');
const { cmd, commands } = require('../command');


// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀 𝐌𝐃";



//twitter dl (x)
cmd({
    pattern: "twitter",
    react: "💙",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("gινє мє тωιттєя υяℓ")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    react: "💜",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("gινє мє g∂яινє υяℓ")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    react: "💜",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("gινє мє мє∂ιαƒιяє υяℓ")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
