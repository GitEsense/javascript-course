const language = prompt('Введите язык [ru, en, de, fr, be, ja, es]');

switch (language) {
    case 'ru':
        console.log('Доброе утро!');
        break;
    case 'en':
        console.log('Good morning!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'fr':
        console.log('Bonjour!');
        break;
    case 'be':
        console.log('Добрай раніцы');
        break;
    case 'ja':
        console.log('おはよう!');
        break;
    case 'es':
        console.log('¡Buen día!');
        break;
    default:
        console.log('Я не знаю такого языка');
        break;
}
