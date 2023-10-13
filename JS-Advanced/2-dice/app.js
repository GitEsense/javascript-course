/*
    Title: Расчёты и Math - домашнее задание
    Description: 
        Сделать функцию для настольных игр. Которая принимает тип dice, который надо бросить:
        d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом интервале с включёнными границами:
            -   d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function getRandomDice(dice) {
    let errorMessage = null;
    const allDices = [
        { dice: 'd4', max: 4 },
        { dice: 'd6', max: 6 },
        { dice: 'd8', max: 8 },
        { dice: 'd10', max: 10 },
        { dice: 'd12', max: 12 },
        { dice: 'd16', max: 16 },
        { dice: 'd20', max: 20 },
    ];
    const { max } = allDices.find((find) => find.dice === dice) ?? { max: null };
    if (!max) {
        errorMessage = `Игральная кость ${dice} не подходит для игры. Доступные значения: [${allDices.map((d) => d.dice).join(', ')}]`;
        return errorMessage;
    }

    return { dice, num: Math.floor(Math.random() * max + 1) };
}

//  Ручная проверка
console.log(getRandomDice('d1'));
console.log(getRandomDice('d2'));
console.log(getRandomDice('d4'));
console.log(getRandomDice('d6'));
console.log(getRandomDice('d9'));
console.log(getRandomDice('d12'));

//  Наполнение массива через генерацию данных
const diceRollArray = [];
const iteration = getRandom(1, 10);

for (let i = 0; i < iteration; i++) {
    const result = getRandomDice('d' + getRandom(1, 20));
    if (result) diceRollArray.push(result);
}

const diceMap = new Map([['iteration', iteration]]);

const diceSet = new Set(diceRollArray.filter((fl) => fl?.dice).map((item) => diceRollArray.find((x) => x.dice === item.dice).dice));

for (const dice of diceSet) {
    const diceRolls = diceRollArray.filter((fl) => fl.dice === dice).map((dice) => dice.num);
    diceMap.set(dice, diceRolls);
}

console.log(diceMap);
