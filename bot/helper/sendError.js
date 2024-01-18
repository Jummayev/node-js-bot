const {bot} = require('../bot');
require('dotenv').config();
const senError = (msg) => {
    const error = JSON.stringify(msg);
    bot.sendMessage(process.env.ADMIN_ID, error).catch((error) => {
        console.log(error)
    });
}

module.exports = {
    senError
}