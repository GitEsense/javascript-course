/* 
    Написать функцию, которая получает на вход строку с:
    -   суммой средств - 1000
    -   валютой средств - руб
    -   целевой валютой - $

    Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет.
    Ставки конвертации хранятся внутри функции
*/

function converter(sum, currency, targetCurrency) {
    const USD = 90;
    const EUR = 100;

    switch (currency) {
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    return sum * USD;
                case 'EUR':
                    return (sum * USD) / EUR;
                default:
                    return null;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    return sum * EUR;
                case 'USD':
                    return (sum * EUR) / USD;
                default:
                    return null;
            }
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    return sum / USD;
                case 'EUR':
                    return sum / EUR;
                default:
                    return null;
            }
        default:
            return null;
    }
}

const convertResult = converter(1500, 'EUR', 'RUB');
console.log(convertResult);
