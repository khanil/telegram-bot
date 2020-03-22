const dotenv = require("dotenv");
const express = require("express");
const Telegraf = require("telegraf");

dotenv.config();

// Env variables read
//
const port = process.env.PORT || 3000;
const token = process.env.BOT_TOKEN;

// Express
//
const expressApp = express();

expressApp.get("/", (req, res) => {
  res.send("Working...");
});

expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Telegram Bot
//
const bot = new Telegraf(token);

bot.start(ctx => ctx.reply("Welcome"));
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.launch();
