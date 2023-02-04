const TelegramApi = require('node-telegram-bot-api');

const {languageOptions, ruChangeProductsOptions, enChangeProductsOptions} = require('./options.js');
const {ruDescription, enDescription} = require('./bd.js');

const token = 'Set your token';

const bot = new TelegramApi(token, {polling: true});

const commands = () => {
    bot.setMyCommands([
        {command: '/start', description:'Начальное приветствие'},
        {command: '/info', description:'Получить информацию о себе'},
    ])
}

const messages = () => {
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
        if(text === 'Ботинок') {
            return bot.sendPhoto(chatId, `${ruDescription.botinok.photo}`, {caption:ruDescription.botinok.caption});
        }
        if(text === 'Страпон') {
            return bot.sendPhoto(chatId, `${ruDescription.strapon.photo}`, {caption:ruDescription.strapon.caption});
        }

        if(text === 'Sock') {
            return bot.sendPhoto(chatId, `${enDescription.sock.photo}`, {caption:enDescription.sock.caption});
        }
        if(text === 'Vape') {
            return bot.sendPhoto(chatId, `${enDescription.vape.photo}`, {caption:enDescription.vape.caption});
        }
        if(text === 'Botinok') {
            return bot.sendPhoto(chatId, `${enDescription.botinok.photo}`, {caption:enDescription.botinok.caption});
        }
        if(text === 'Strapon') {
            return bot.sendPhoto(chatId, `${enDescription.strapon.photo}`, {caption:enDescription.strapon.caption});
        }
        
        bot.sendMessage(chatId, `Я тебя не понимаю, уёбок.`);
    })
}

const start = () => {
    commands(); 
    messages();
}

start ();
