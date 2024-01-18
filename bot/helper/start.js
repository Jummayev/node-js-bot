const {bot, homeMenu} = require('../bot');
const {senError} = require('./sendError');
const helper = require('./helper');
const start = async (msg) => {
    const user = await helper.user.findOrCreate(msg.from.id, msg);
    await helper.user.updateAction(user.chat_id, "home");
    const welcomeMessage = `Welcome ${user.first_name}!`;
    bot.sendMessage(msg.from.id, welcomeMessage, homeMenu).catch((error) => {
        senError(error)
    });
}

module.exports = {
    start
}