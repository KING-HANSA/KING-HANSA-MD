const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("ρℓєαѕє gινє мє α υяℓ σя тιтℓє")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝙺𝙸𝙽𝙶 𝙷𝙰𝙽𝚂𝙰 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁]彡★


🎵 *Song Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎧 *Enjoy the music brought to you by* *King Hansa Bot*! 

> *Created with ❤️ by Hansa Dewmina* 

> *© 𝙆𝙄𝙉𝙂 𝙃𝘼𝙉𝙎𝘼 𝘽𝙊𝙏 - MD* 
*💻 GitHub:* github.com/DEWMINA-HD/KING-HANSA-MD-V1 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© ᴋɪɴɢ ʜᴀɴꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α ѕσηg')
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("ρℓєαѕє gινє мє α υяℓ σя тιтℓє")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝙺𝙸𝙽𝙶 𝙷𝙰𝙽𝚂𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁]彡★


🎥 *Video Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *KING HANSA Bot*! 

> *Created with ❤️ by Hansa Dewmina* 

> *© 𝙌𝙐𝙀𝙀𝙉 𝙍𝙊𝙎𝙃𝙄𝙆𝘼 𝘽𝙊𝙏 - MD* 
*💻 GitHub:* github.com/DEWMINA-HD/KING-HANSA-MD-V1
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© ᴋɪɴɢ ʜᴀɴꜱᴀ  ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α νι∂єσ')
}
})
