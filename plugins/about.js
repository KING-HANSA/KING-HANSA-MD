const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "ℹ️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` 👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑
              ${senderNumber} 
              𝐈 𝐀𝐌 𝐊𝐈𝐍𝐆_𝐇𝐀𝐍𝐒𝐀 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
              𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐃𝐄𝐖𝐌𝐈𝐍𝐀-𝐇𝐃(𝐇𝐀𝐍𝐒𝐀 𝐃𝐄𝐖𝐌𝐈𝐍𝐀)..
              
              > *© ᴋɪɴɢ ʜᴀɴꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
              > *ɢɪᴛʜᴜʙ :* github.com/KING-HANSA/KING-HANSA-MD          
              тнαηкѕ ƒσя υѕιηg кιηg нαηѕα ωнαтѕαρρ вσт м∂`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


