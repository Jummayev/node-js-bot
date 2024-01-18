const {bot} = require('./bot');
const {start} = require('./helper/start');

bot.on('message', async (msg, type) => {
    const chatId = msg.from.id;
    const text = msg.text;
    switch (text) {
        case '/start':
            await start(msg);
            break;
        case '/help':
            bot.sendMessage(chatId, 'How can I help you?')
                .catch((error) => {
                    senError(error)
                });
            break;
        default:
            bot.sendMessage(chatId, 'I don\'t understand you')
                .catch((error) => {
                    senError(error)
                });
            break;
    }
});