'use strict';

/*
    Title: Таймеры - домашнее задание
    Description: 
        Cделать приложение, которое в браузере выводит таймер реального времени, который показывает сколько осталось до нового года в формате:
        10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд
*/

/* 
    ------------------------------------------
    VARIANT 1
    ------------------------------------------
*/
const locale = navigator.language;

function getDayBetweenDates(ms) {
    const second = Math.floor(ms / 1000),
        minute = Math.floor(second / 60),
        hour = Math.floor(minute / 60),
        day = Math.floor(hour / 24),
        month = Math.floor(day / 30.425);

    const unitMap = new Map([
        ['month', month % 12],
        ['day', Math.floor(day % 30.425)],
        ['hour', hour % 24],
        ['minute', minute % 60],
        ['second', second % 60],
    ]);

    const templateMessage = [...unitMap].map(([unit, amount]) => {
        const timeFormat = new Intl.RelativeTimeFormat(navigator.language);
        const relativeTime = timeFormat.format(amount, unit);
        const regexp = new RegExp('(.*? )');
        return relativeTime.replace(regexp, '');
    });
    if (ms / 1000 === 0) return 'Happy New Year!';
    return templateMessage.join(', ');
}

/*
    // заменить diff этим значением, чтобы проверить работу таймера (10 сек);
    // let testOf10sec = 10000;
*/

let diff = Date.parse('2024-01-01') - Date.now();
const interval = setInterval(() => {
    console.log(getDayBetweenDates((diff -= 1000)));
}, 1000);
setTimeout(() => clearInterval(interval), diff);

/* 
    ------------------------------------------
    VARIANT 2
    ------------------------------------------
*/

function createLabel(number, index) {
    const labels = [
        // ['год', 'года', 'лет'],
        ['месяц', 'месяца', 'месяцев'],
        ['день', 'дня', 'дней'],
        ['час', 'часа', 'часов'],
        ['минута', 'минуты', 'минут'],
        ['секунда', 'секунды', 'секунд'],
    ];

    const patternMap = new Map([
        ['one', 0],
        ['few', 1],
        ['many', 2],
    ]);
    const plural = new Intl.PluralRules('ru-RU', { type: 'cardinal' }).select(number);
    const subIndex = patternMap.get(plural);

    return labels[index][subIndex];
}

function getDayBetweenDates2() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, -1);
    const timeArray = [
        // newYear.getFullYear() - now.getFullYear(), //year
        newYear.getMonth() - now.getMonth(), //month
        newYear.getDate() - now.getDate(), //day
        newYear.getHours() - now.getHours(), //hour
        newYear.getMinutes() - now.getMinutes(), // min
        newYear.getSeconds() - now.getSeconds(), // sec
    ];

    const templateMessage = [];
    timeArray.forEach((number, index) => {
        if (number !== 0) templateMessage.push(`${number} ${createLabel(number, index)}`);
    });

    return templateMessage.join(', ');
}

const interval2 = setInterval(() => {
    console.log(getDayBetweenDates2());
}, 1000);
setTimeout(() => clearInterval(interval2), diff);
