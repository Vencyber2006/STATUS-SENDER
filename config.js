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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU0wRWQ4MmNnQlBiWkMyQ1NRVnlYbDRNUFIxeGNpejlYZ2R4NUg1UnRrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidktUM216Uyt4cHA3Z3hrUzhiVzhvemZXb2syQnVqSEYwYlJMZDJmZElRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRW0yTlc5Q1VSKy9WVml6RVFwVzRKMW1uWlJOY3g5djJNSWZDRFlla21zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWHdDdUYrbzdCMjE5aGFMTlBIUVdNYlJzakpUeG5OclB1dlFaVWhMaXkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOR1NGZHBBQzRqY05pc2czK2E1ZXFRSHR6SEo5eDdoMW1Ia3BXYSsybW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBWeGdFWk04RERieDRYemI0ZHlidGRuUWJERGdWTkg3RWdCVEQ3ZkxlWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBDUjJJd0syU1dsMFJXcHk5cmh0MS82WXZ0b2dObmZvTlJ2cUNLaExVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS21HUytZNGQwdVpaTXUvM1JKUUtCL0MrU3lwS3p3ci95YlBJaDVnZURpVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im91M0tpVTJTaG42YlNvSXJMY002bGlmNkl0Z2FzOWVPbTJ6WnpTUm9Nemh6Rjc5dmNNc3pCOEhPMGhPQlBYdjNFSW9yb0RKU0pIMHpKMjN2SkVzdkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJIcSt3OGVjTSsxMG0vbkpxR1drNk81QmhCS29XVmd0c2FxZFVoSVRVSm5JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0MzIyNDg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ3RTk5OTEyRUEyMjM5RTQxRDdFOUJFNzk2OUQ1MEFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxNzYzMjB9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFheGZUdy16UnJTVGw4bkJFeFZ4bmciLCJwaG9uZUlkIjoiNjZiZWMyZGYtZWNhYi00YWNhLTkyYzctZGEwOTFlYWFmNGJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InltaG1FakNteWdLSitzdEpORHhzb1JCb00rTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoaE5tRjJsOEF1K3IxdnBiUWFmNUdwYkEvYm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUY4RUhZRTYiLCJtZSI6eyJpZCI6Ijk0NzA0MzIyNDg1OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkkgQU1cblxuXG5cblxuVlxuXG5cblxuXG5cbkVcblxuXG5cblxuTlxuXG5cblxuXG5DXG5cblxuXG5cbllcblxuXG5cblxuQlxuXG5cblxuXG5FXG5cblxuXG5cblJcblxuXG5cblxuVkVOIENZQkVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJWFRxS29ERUs2ZG43UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXRHdjTnBJcWJZWTUrc2JxUVc5SEdIbnNkV0NESDA1dmZmSS9PTFFCUHlVPSIsImFjY291bnRTaWduYXR1cmUiOiIxa2lCaWM3ZDFxUWxJM3lnRFVVV0psckcxaUlSZE1XZlR1VjF0T2Rlc3pQbjc1a0RMdlRZTmc5RjU4MXIxTGdod0JaWXI0MG9uU2R3QWpUazd3akJBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSVBpMGZEeUNRb2JSVVkyOXpoekZVS0dVNXVpVXlSQi9VUFRtZytmcENCeGhJbGFkQTBLWTlXWGtvb3gweDlWa2p2ZzNPdmd3RUxzZWRLL1c2djhGRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDMyMjQ4NTo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWZzhIRGFTS20yR09mckc2a0Z2UnhoNTdIVmdneDlPYjMzeVB6aTBBVDhsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTc2MzE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBYVCJ9"
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
