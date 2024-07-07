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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhRODN2UXZQeEhLRDQrSitiQXVIUUZTWGJCcmltc3BiQTEzR3R0VGIwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2JNSnFldmxKQmZZYTZNd3kzZmZ0bnRWU1JGRFZLNjdLd213RWNzbDB5VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ2k3aHc4NEJ2VElYeGYrZGVQK2NVV3VnTDNqK0J2SXV6RWVUVW5BS2tNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESW1tVzVYYXVnNmNSNVhvYU1NQTNQeU9seERKZFZ6bHJMOFpDU2JRb2kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREaWF0UEdGaWlvck5rNlpDYXkxa3lFU2piSnB4bjR1VDkvZXNES0hsbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZtLzBxV0hvWk82SDdBZ2JjaCtheGh0RythNEpuRzJ6ZzdzZldGY296RUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0cwTzlTOGh5UG5aMGlxZjUrdHZyTUtwQVdCUC9yUVVqZlRaMW9EbDhsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnBTMXVQWHpWSzlUQktSUk0zK1F5anlPMWxTQUR6QVhvb01hQ2xHTkd3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpvTjZtR0E3aitrMDRZazBHN3JqVjhNSnlCMUdwY0JGYzU3d3F5OWpOQnVsUHMya2YzRVNJVVU5bDA3T1hUYjNIRnRuYzl3MVZQbnhEUnlTVFNsZENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IjhkM3hZTC9iZWpBNHY4T3RVa2F0SmtxSWx5NSs1eTg5ZXpXRkZUbVdiVTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQzMjI0ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Y2NUNEMEZFOTUyOTVGMEZBMEM4N0RFOTVGMzZGRUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDMzMTcxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWDNjeXEyZFpRZE9veDd5dlNOYUFHdyIsInBob25lSWQiOiIyMGVkOTQ1YS1kM2UwLTQyNTctYmM4NS05MGRmZWViNzYzOTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjlvUmJ5S0N5TjJ5Wlh4T09BWVRxMW5aem1ZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF5NDIrUkYvYzltUktHWTlmTXR3OFd2RFd5az0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaRlJIODU0TiIsIm1lIjp7ImlkIjoiOTQ3MDQzMjI0ODU6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QlfCdkITwnZCNIPCdkILwnZCY8J2QgfCdkITwnZCRIPCdkJLwnZCT8J2QgPCdkJHwnZCTIDzwnZCW8J2QgPCdkIjwnZCTPlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbvCdkJXwnZCE8J2QjSDwnZCC8J2QmPCdkIHwnZCE8J2QkSDwnZCE8J2QjfCdkIMgW/CdkIvwnZCO8J2Qi10ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lYVHFLb0RFSy9icUxRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldEd2NOcElxYllZNStzYnFRVzlIR0huc2RXQ0RIMDV2ZmZJL09MUUJQeVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklUem1sb2p3SnlGaXc2NTVxRmd5SjFiUzQ2NUwxWVRLVndpSExEeVc1azc4OUNJaDBFWXBVajB1YmVSSXh0amdrQkVtcXExaWpQVWNJWFJyekVYUENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHemcyVGw2QnE1K2JIL0tNVVhINjZlN3NFU3pTRzZDMTRqbWNWUFVQNG5jZzBJQjZJL09ScFFNQVFWakREQ2VGWW50NmVkSjZINDc4Yjl0ZGMzUkVEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA0MzIyNDg1OjQ1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZnOEhEYVNLbTJHT2ZyRzZrRnZSeGg1N0hWZ2d4OU9iMzN5UHppMEFUOGwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzMzE3MDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFhUIn0="
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
