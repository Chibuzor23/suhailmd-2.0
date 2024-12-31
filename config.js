const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348038276751";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SSUHAIL_20_51_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRTlwQUZXd0p2bC8yTG1GZnovWWlIY2N1enFYSnpZTnJYNG8xNU1vMVlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRdFVsRFVxUFRBaXYzNmpfS04yN2NRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQzMDA1ZTI5LTRlYzgtNGY2NS04OTcxLWE1MWE1MDgzZDQxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxODMsXG4gICAgICA5MyxcbiAgICAgIDIxMSxcbiAgICAgIDE5OSxcbiAgICAgIDE3NyxcbiAgICAgIDE2OCxcbiAgICAgIDI0MCxcbiAgICAgIDIwOSxcbiAgICAgIDI1LFxuICAgICAgNTgsXG4gICAgICAyMzAsXG4gICAgICAxOTMsXG4gICAgICA5MixcbiAgICAgIDIwOSxcbiAgICAgIDcyLFxuICAgICAgNDEsXG4gICAgICAyM 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
