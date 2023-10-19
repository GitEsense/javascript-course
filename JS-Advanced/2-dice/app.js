'use strict';
/*
    Title: Расчёты и Math - домашнее задание
    Description: 
        Сделать функцию для настольных игр. Которая принимает тип dice, который надо бросить:
        d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом интервале с включёнными границами:
            -   d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

const acceptDices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function errorMessage(dice) {
    if (!acceptDices.includes(dice)) {
        return `Игральная кость ${dice} не подходит для игры. Доступные значения: [${acceptDices.join(', ')}]`;
    }
    return null;
}

function getRandomDice(dice, fn) {
    const error = errorMessage(dice);
    if (error) return error;
    const max = fn(dice);
    return { dice, num: Math.floor(Math.random() * max + 1) };
}

function consoleRandomResult(fn) {
    //  Ручная проверка
    console.log(`----------------- ${fn.name} ---------------\n`);
    console.log('-----------------РУЧНАЯ ПРОВЕРКА---------------\n');
    console.log(getRandomDice('d1', fn));
    console.log(getRandomDice('d2', fn));
    console.log(getRandomDice('d4', fn));
    console.log(getRandomDice('d7', fn));
    console.log(getRandomDice('d6', fn));
    console.log(getRandomDice('d9', fn));
    console.log(getRandomDice('d10', fn));
    console.log(getRandomDice('d12', fn));

    //  Наполнение массива через генерацию данных
    console.log('\n---НАПОЛНЕНИЕ МАССИВА ЧЕРЕЗ ГЕНЕРАЦИЮ ДАННЫХ---');
    const iteration = getRandom(1, 20);
    const diceRollArray = [];

    for (let i = 0; i < iteration; i++) {
        const result = getRandomDice('d' + getRandom(1, 20), fn);
        if (result) diceRollArray.push(result);
    }

    const diceMap = new Map([['iteration', iteration]]);

    const diceSet = new Set(diceRollArray.filter((fl) => fl?.dice).map((item) => diceRollArray.find((x) => x.dice === item.dice).dice));

    for (const dice of diceSet) {
        const diceRolls = diceRollArray.filter((fl) => fl.dice === dice).map((dice) => dice.num);
        diceMap.set(dice, diceRolls);
    }

    console.log(diceMap);
}
function getMaxPattern1(dice) {
    const allDices = [
        { dice: 'd4', max: 4 },
        { dice: 'd6', max: 6 },
        { dice: 'd8', max: 8 },
        { dice: 'd10', max: 10 },
        { dice: 'd12', max: 12 },
        { dice: 'd16', max: 16 },
        { dice: 'd20', max: 20 },
    ];
    return allDices.find((find) => find.dice === dice)?.max;
}
function getMaxPattern2(dice) {
    return Number.parseInt(dice.replace(new RegExp('\\D+', 'g'), ''));
}
function getMaxPattern3(dice) {
    const pattern = new RegExp('\\d+', 'g');
    return Number.parseInt(dice.match(pattern));
}

console.log('\n------------------VARIANT - 1------------------\n\n');
consoleRandomResult(getMaxPattern1);
console.log('\n------------------VARIANT - 2------------------\n\n');
consoleRandomResult(getMaxPattern2);
console.log('\n------------------VARIANT - 3------------------\n\n');
consoleRandomResult(getMaxPattern3);
