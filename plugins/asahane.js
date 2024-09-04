const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "asahane",
    desc: "Get bot\'s command list.",
    react: "🤞",
    category: "voice",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{

const voice = {
    gn: 'media/Mona tharam asahanayakda.mp3'
}

await conn.sendMessage(from, { audio: { url: voice.gn }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })


} catch (e) {
reply('αη єяяσя')
l(e)
}
})
