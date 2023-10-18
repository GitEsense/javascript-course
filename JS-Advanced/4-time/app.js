'use strict';

/*
    Title: Таймеры - домашнее задание
    Description: 
        Cделать приложение, которое в браузере выводит таймер реального времени, который показывает сколько осталось до нового года в формате:
        10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд
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

    const subIndex = number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 > 1 && number % 10 < 5 && !(number % 100 > 10 && number % 100 < 15) ? 1 : 2;

    return labels[index][subIndex];
}

function getDayBetweenDates() {
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

setInterval(() => console.log(getDayBetweenDates()), 1000);
