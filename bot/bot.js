const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {polling: true});

const homeMenu = {
    "reply_markup": {
        "keyboard":
            [[
                {"text": "Trek-kod / shtrix-kod tekshirish"},
                {"text": "Kargo narxlari"}
            ], [
                {"text": "Filiallar"},
                {"text": "ID olish"}
            ], [
                {"text": "Reyslar taqvimi"},
                {"text": "Shaxsiy kabinet"}
            ], [
                {"text": "Ta'qiqlangan buyumlar"},
                {"text": "Call-Center"},
                {"text": "Yuan sotib olish"}
            ], [
                {"text": "MK School kurslari"},
                {"text": "Toshkent bo'ylab yetkazib berish"}
            ], [
                {"text": "Kodsiz tovarlar"},
                {"text": "Hajmiy (gabarit) og'irlikni hisoblash"}
            ]],
        "resize_keyboard": true

    }
}

module.exports = {
    bot,
    homeMenu
};
require("./message");
