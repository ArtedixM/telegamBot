module.exports = {
    languageOptions: {
        reply_markup: {
            keyboard: [
                [{text: '🇬🇧 English', callback_data: 'English'}, {text: '🇷🇺 Русский', callback_data: 'Russian'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    },
    
    ruChangeProductsOptions: {
        reply_markup: {
            keyboard: [
                [{text: 'Носок', callback_data: 'Носок'}, {text: 'Ботинок', callback_data: 'Ботинок'}],
                [{text: 'Вейп', callback_data: 'Вейп'}, {text: 'Страпон', callback_data: 'Страпон'}]
            ],
            resize_keyboard: true
        }
    },
    
    enChangeProductsOptions: {
        reply_markup: {
            keyboard: [
                [{text: 'Sock', callback_data: 'Sock'}, {text: 'Botinok', callback_data: 'Botinok'}],
                [{text: 'Vape', callback_data: 'Vape'}, {text: 'Strapon', callback_data: 'Strapon'}]
            ],
            resize_keyboard: true
        }
    }
}