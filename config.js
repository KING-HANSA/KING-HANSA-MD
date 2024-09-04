///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //                                     
//                                        ██╗  ██╗██╗███╗   ██╗ ██████╗     ██╗  ██╗ █████╗ ███╗   ██╗███████╗ █████╗                                 //    
//                                        ██║ ██╔╝██║████╗  ██║██╔════╝     ██║  ██║██╔══██╗████╗  ██║██╔════╝██╔══██╗                                //
//                                        █████╔╝ ██║██╔██╗ ██║██║  ███╗    ███████║███████║██╔██╗ ██║███████╗███████║                                //
//                                        ██╔═██╗ ██║██║╚██╗██║██║   ██║    ██╔══██║██╔══██║██║╚██╗██║╚════██║██╔══██║                                //
//                                        ██║  ██╗██║██║ ╚████║╚██████╔╝    ██║  ██║██║  ██║██║ ╚████║███████║██║  ██║                                //
//                                        ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝                                //
//===========================================================*🅲🅸🆁🅰🆃🅴🅳 🅱🆈 🅷🅰🅽🆂🅰 🅳🅴🆆🅼🅸🅽🅰*=====================================================//                                 //
//                                                                                                                                                    //                                                                                     //       
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/cd454f186aa11281fdbaa.png",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, KING HANSA IS ALIVE...\n\nOWNER: HANSA DEWMINA\n\nTHANKS FOR USING KING HANSA MD\n\n> *© ᴋɪɴɢ ʜᴀɴꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*/n/n*> ɢɪᴛʜᴜʙ :* github.com/DEWMINA-HD/KING-HANSA-MD-V1",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "947..",
OWNER_REACT: process.env.OWNER_REACT || "🔗",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
};

