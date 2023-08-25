//  Домашнее задание
/*
    написать функцию проверки номера карты алгоритмом Луна. В функцию передаётся карта:
    4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм и false, если нет
*/
function cardLunaValidate(card) {
    const cardNumber = card
        .replaceAll('-', '')
        .split('')
        .map((x) => Number(x));
    if (cardNumber.includes(NaN)) {
        return NaN;
    }
    const isEven = (cardNumber.length - 1) % 2 === 0;

    for (let i = Number(isEven); i < cardNumber.length; i = i + 2) {
        cardNumber[i] =
            cardNumber[i] * 2 > 9 ? cardNumber[i] * 2 - 9 : cardNumber[i] * 2;
    }
    const sum = cardNumber.reduce((total, el) => total + el);
    return sum % 10 === 0;
}
const card = '234s834503458353';
const card1 = '2342834503458353';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

function resultTemplate(card) {
    const startString = `Карта с номером: ${card}`;
    const endString = `получила результат: ${cardLunaValidate(card)}`;
    return `${startString} ${endString}`;
}
console.log(resultTemplate(card));
console.log(resultTemplate(card1));
console.log(resultTemplate(card2));
console.log(resultTemplate(card3));
