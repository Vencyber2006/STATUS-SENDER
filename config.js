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
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lKSTJJWG0yVUlKZnh2YzVyRHhOL0dadmNhbnRFK2dWVWI3ZTUvYVVXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2VxbnhpZHozSzQzRHluOUZhRVhIY1dNLy9KZUJlOUpMYXF2bEM1ZVNEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2RkOTN0L0ppd1FjbEpQd2dlaDJRL0tqbVN5MTN5TXZPTHM5ZXYrK1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxM0NodWRiQ2QxSHQ1LzhwKzdTajVwMVBoR3Nxb1l2a1FteWkvdjdaeGk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJKzRiL25XMDJYaTNFZXlhNHQ5QXBiMzVwcmt3VzRuQ2ltM1U0V0l2bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFqNEd1ZXdIaWtIWXNldzZXckc4amY0WXdxVy9BYnozSmkrdDUyS05LUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0MvOGVEMVlmcWlCZzhCc0pDNjRDZU5ESnBwSTlneUZkSEtXV2Jpc2FYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnFvQnJzMHNtSkpLWmxKTnVMUk1QK1Y5K3FqaW44c0kzV2dyN0REL2lBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0TzN1anRKWDB4UTdpYitWK3BVSkpSL21GUnB3UENjL1dqUDU5RDZ1MWdOK2tqN0VTS3ZZN2dvN0poL3gxelJiaFNIYUtqcVY0L2Q0RVlpT1Y0U2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJwWEpJRHlnWWpjazB3R09zNjEzQkVBK2c4RjhQdkFoY1dlK2hBMVNtSXNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6cTc4ZHJ5X1FINlZCYzlKUDllYWpBIiwicGhvbmVJZCI6IjdiOGNmODUzLWE2YjMtNDJlOS05YWY3LTE1ZjUyNTdjMTVlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCelVENWZoZ0R0a0FsS1oyK0lxWXhHNjUvWWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjM0Wnd1d2l2ZmIyNmlvaEhKcGlVREUxWDhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRBVjlTNlNYIiwibWUiOnsiaWQiOiI5NDcwNDMyMjQ4NTo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJIEFNXG5cblxuXG5cblZcblxuXG5cblxuXG5FXG5cblxuXG5cbk5cblxuXG5cblxuQ1xuXG5cblxuXG5ZXG5cblxuXG5cbkJcblxuXG5cblxuRVxuXG5cblxuXG5SXG5cblxuXG5cblZFTiBDWUJFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVRUcUtvREVMcnNtN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0R3Y05wSXFiWVk1K3NicVFXOUhHSG5zZFdDREgwNXZmZkkvT0xRQlB5VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQkdqTVNSTlI1alhLU1BicG03blBRaUttOHV6QnFRQXg0S0dSZTZnZVVrczd0bzJPKzVpZ2twSEZVbE9BMDhpcUZMR3p4em9hajlsRzdmSFc3alNFRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkpVc29xTDZuTXZjNXd4anIxSWtjMCsvSHZyRE9XMnd0R0RCOHFLQUZzN1MrWlhURCtCMFhiSHB2SThhd29aV1F1Y0FjSklwYXVLcEtZSUtpTjVuamlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQzMjI0ODU6NDBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmc4SERhU0ttMkdPZnJHNmtGdlJ4aDU3SFZnZ3g5T2IzM3lQemkwQVQ4bCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDEyMDkwMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQWFQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
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
