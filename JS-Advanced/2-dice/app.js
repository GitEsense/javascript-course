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

function consoleRandomResult(fn) {
    //  Ручная проверка
    console.log('-----------------РУЧНАЯ ПРОВЕРКА---------------\n');
    console.log(fn('d1'));
    console.log(fn('d2'));
    console.log(fn('d4'));
    console.log(fn('d7'));
    console.log(fn('d6'));
    console.log(fn('d9'));
    console.log(fn('d10'));
    console.log(fn('d12'));

    //  Наполнение массива через генерацию данных
    console.log('\n---НАПОЛНЕНИЕ МАССИВА ЧЕРЕЗ ГЕНЕРАЦИЮ ДАННЫХ---');
    const iteration = getRandom(1, 20);
    const diceRollArray = [];

    for (let i = 0; i < iteration; i++) {
        const result = fn('d' + getRandom(1, 20));
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

function getRandomDice2(dice) {
    const error = errorMessage(dice);
    if (error) return error;
    const max = Number.parseInt(dice.replace(new RegExp('\\D+', 'g'), ''));
    return { dice, num: Math.floor(Math.random() * max + 1) };
}

function getRandomDice3(dice) {
    const error = errorMessage(dice);
    if (error) return error;
    const pattern = new RegExp('\\d+', 'g');
    const max = Number.parseInt(dice.match(pattern));

    return { dice, num: Math.floor(Math.random() * max + 1) };
}

console.log('\n------------------VARIANT - 1------------------\n\n');
consoleRandomResult(getRandomDice);
console.log('\n------------------VARIANT - 2------------------\n\n');
consoleRandomResult(getRandomDice2);
console.log('\n------------------VARIANT - 3------------------\n\n');
consoleRandomResult(getRandomDice3);
