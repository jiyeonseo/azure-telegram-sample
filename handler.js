'use strict';

module.exports = (context, req) => {
    const TelegramBot = require('node-telegram-bot-api');

    const token = "YOUR_API_TOKEN";
    const bot = new TelegramBot(token);
    const chatId = req.body.message.chat.id;

    const out = bot.sendMessage(chatId, 'Hello World!');
    
    context.res = {
    // status: 200, /* Defaults to 200 */
        body: 'ok',
    };    

    context.done();
};