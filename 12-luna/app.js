//  Домашнее задание
/*
    написать функцию проверки номера карты алгоритмом Луна. В функцию передаётся карта:
    4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм и false, если нет
*/
function cardLunaValidation(card) {
    const cardNumber = card
        .replaceAll('-', '')
        .split('')
        .map((x) => Number(x));
    const isEven = (cardNumber.length - 1) % 2 === 0;

    for (let i = 0; i < cardNumber.length; i++) {
        if (isNaN(cardNumber[i])) {
            return false;
        }
        if (i % 2 == isEven) {
            cardNumber[i] =
                cardNumber[i] * 2 > 9
                    ? cardNumber[i] * 2 - 9
                    : cardNumber[i] * 2;
        }
    }
    const sum = cardNumber.reduce((total, el) => total + el);
    return sum % 10 === 0;
}
const card1 = '2342834503458353';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

console.log(
    `Карта с номером ${card1}: ${
        cardLunaValidation(card1)
            ? 'прошла алгоритм'
            : 'не смогла пройти алгоритм'
    }`
);
console.log(
    `Карта с номером ${card2}: ${
        cardLunaValidation(card2)
            ? 'прошла алгоритм'
            : 'не смогла пройти алгоритм'
    }`
);
console.log(
    `Карта с номером ${card3}: ${
        cardLunaValidation(card3)
            ? 'прошла алгоритм'
            : 'не смогла пройти алгоритм'
    }`
);
