//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94704322485,94704322485";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0czOGlqSlZYejVMN2Uvdjg5blBBSEF0c1hKT2lPUXM0ZElUeEMvNnRuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTI2OWgzRXd1T001Qy9ITXlDTnVKTFRabGo0dnB5NThDQlJVRG10VXhEWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQnJoR1RZMlZIM1Rzc3p4Q2lNck1XOFJQUVRta05Dc1dCT3htaURtbm5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eVJsWFUvbzZDQ2tVRFVxZTlKQzZxV0pOdnlmVHFJZi9nSFZQVUVyM1Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJOTg5NWFxRDZWSlAxR0dPY25tY2U0WVJlU2l2QXlvdGMxY2NFeVM1RzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGeFRNdUNzdGg2ZG5hWWZUNWlFeUs5OEltSnIvL0xjcG9USGVCd3Biamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkszWlRFQ0FuRnNQOHEzSllKMjROenczRUpZc0ZiK0d0S2twTm0rSFgwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVExcEx2OVE2NWJGQVhsb1Z6eFV0OHRKdEFlem5kUnh3NWw2enkrbWhrMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Rb2pUczBqb3pYZWRLeTNCVnV1TFIyVW5wbDBtb2hMZExpQ3h2ZkNvell6MXpVb3Nib3d3UlhjdnZ4b2tHcTJad3NlODVsSnZyTzFaYk5BNHc2UWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJidVZJZ05ocG1TNUVLc0ttOWlhYnFNTmJoeVVtaEFDK2hGSXpLYkV4RytBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuOE9xM3B3YlJJNmFSNHdhR05nMUJBIiwicGhvbmVJZCI6ImMyZWFmMjg2LWMxYjMtNDM5ZS1hOGVkLWExZGZjYWM4MTgxMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZ3JLRG15VU9QRE9GM1JBV1Y0RnQrN24wZ0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDFmNjFlbVVvaTdubDdoMlJ2SUE5WmZWNU9VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxFOTZEQkRMIiwibWUiOnsiaWQiOiI5NDcwNDMyMjQ4NTo0NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCV8J2QhPCdkI0g8J2QgvCdkJjwnZCB8J2QhPCdkJEg8J2QkvCdkJPwnZCA8J2QkfCdkJMgPPCdkJbwnZCA8J2QiPCdkJM+XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu8J2QlfCdkITwnZCNIPCdkILwnZCY8J2QgfCdkITwnZCRIPCdkITwnZCN8J2QgyBb8J2Qi/CdkI7wnZCLXSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWJUcUtvREVKMllyclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0R3Y05wSXFiWVk1K3NicVFXOUhHSG5zZFdDREgwNXZmZkkvT0xRQlB5VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidEN6Wlo1bS92L2pEQnNvaHJ2YUtDWUZxcVN5S0VHc1NwR2hsMXNYY0JMaE84VlY5dGVudmZ2STg2UmQwUzZmcG4xZHpTVlBOTkxPV2tLSXQ4dXdWQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IisvMFFpQUtQblBIVEtMMFZmZVpDYTJVQ1lwazVROVJPWEZicUoySE52NkswTkJZUmI3MWRSaVBHVG52dCtFd0hrQ3JwSFdXTURwVktmQjh5ZTRXRGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQzMjI0ODU6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmc4SERhU0ttMkdPZnJHNmtGdlJ4aDU3SFZnZ3g5T2IzM3lQemkwQVQ4bCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQyMTQxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNRTcifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝑽𝑬𝑵 𝑪𝒀𝑩𝑬𝑹",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
