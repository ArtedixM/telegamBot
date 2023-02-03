const TelegramApi = require('node-telegram-bot-api');

const {languageOptions, ruChangeProductsOptions, enChangeProductsOptions} = require('./options.js');
const {ruDescription, enDescription} = require('./bd.js');

const token = '5903378802:AAECQNd8AYkdcOiuIDT5n1kkKvIZXV0KCX8';

const bot = new TelegramApi(token, {polling: true});


const start = () => {
    bot.setMyCommands([
        {command: '/start', description:'Начальное приветствие'},
        {command: '/info', description:'Получить информацию о себе'},
    ])
    
    bot.on('message', msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        
        if(text === '/start') {
            return bot.sendMessage(chatId, `Добро пожаловать ко мне, кожанный ублюдок.`, languageOptions);
        }

        if(text === '/info') {
            return bot.sendMessage(chatId, `Ты конченный и звать тебя`);
        }

        if(text === '🇷🇺 Русский') {
            return bot.sendMessage(chatId, `Добро пожаловать в Россию, сука.`, ruChangeProductsOptions);
        }

        if(text === '🇬🇧 English') { 
            return bot.sendMessage(chatId, `Welcome to the club body.`, enChangeProductsOptions);
        }

        if(text === 'Носок') {
            return bot.sendPhoto(chatId, `${ruDescription.sock.photo}`, {caption:ruDescription.sock.caption});
        }

        if(text === 'Вейп') {
            return bot.sendPhoto(chatId, `${ruDescription.vape.photo}`, {caption:ruDescription.vape.caption});
        }

        return bot.sendMessage(chatId, `Я тебя не понимаю, уёбок.`);
    })
}

start ();