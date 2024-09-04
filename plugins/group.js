const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "promote",
    desc: "Promote a member to admin.",
    category: "group",
    react: "🔼",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('ρℓєαѕє тαg σя яєρℓу тσ α υѕєя тσ ρяσмσтє.')

        await conn.groupParticipantsUpdate(from, [user], 'promote')
        await reply(`@${user.split('@')[0]} has been promoted to admin.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

cmd({
    pattern: "demote",
    desc: "Demote an admin to member.",
    category: "group",
    react: "🔽",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('ρℓєαѕє тαg σя яєρℓу тσ α υѕєя тσ ∂ємσтє.')

        await conn.groupParticipantsUpdate(from, [user], 'demote')
        await reply(`@${user.split('@')[0]} has been demoted to member.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})
cmd({
    pattern: "remove",
    desc: "Remove a member from the group.",
    category: "group",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const user = m.mentioned[0] || m.quoted?.sender
        if (!user) return reply('ρℓєαѕє тαg σя яєρℓу тσ α υѕєя тσ яємσνє.')

        await conn.groupParticipantsUpdate(from, [user], 'remove')
        await reply(`@${user.split('@')[0]} has been removed from the group.`, { mentions: [user] })
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

cmd({
    pattern: "add",
    desc: "Add a member to the group.",
    category: "group",
    react: "➕",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const user = q.split(' ')[0]
        if (!user) return reply('ρℓєαѕє ρяσνι∂є α ρнσηє ηυмвєя тσ α∂∂.')

        await conn.groupParticipantsUpdate(from, [`${user}@s.whatsapp.net`], 'add')
        await reply(`@${user} has been added to the group.`, { mentions: [`${user}@s.whatsapp.net`] })
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const goodbye = q
        if (!goodbye) return reply('ρℓєαѕє ρяσνι∂є α gσσ∂вує мєѕѕαgє.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

cmd({
    pattern: "setwelcome",
    desc: "Set the welcome message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')
        if (!isBotAdmins) return reply('вσт мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')
        if (!isAdmins) return reply('уσυ мυѕт вє αη α∂мιη тσ υѕє тнιѕ ¢σммαη∂.')

        const welcome = q
        if (!welcome) return reply('ρℓєαѕє ρяσνι∂є α ωєℓ¢σмє мєѕѕαgє.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: welcome })
        await reply('Welcome message has been set.')
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

cmd({
    pattern: "getpic",
    desc: "Get the group profile picture.",
    category: "group",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('тнιѕ ¢σммαη∂ ¢αη σηℓу вє υѕє∂ ιη α gяσυρ.')

        const groupPic = await conn.getProfilePicture(from)
        await conn.sendMessage(from, { image: { url: groupPic }, caption: 'Group Profile Picture' })
    } catch (e) {
        console.log(e)
        reply(`αη υη¢кησωη єяяσя`)
    }
})

