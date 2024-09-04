const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "apkdl",
    desc: "Download Apk",
    react: "🪀",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.maher-zubair.xyz/search/google-image?apikey=d44ac2d3821704bd62&q=who%20is%20Maher%20Zubair`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
