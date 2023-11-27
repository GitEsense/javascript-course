'use strict';
/*
    Title: Продвинутый DOM и Events - домашнее задание
    Description: 
        Сделать 5 кнопок с тектом "Нажми меня" и div, где отображается
        чисто нажатий (по умолчанию 0).
        -   При нажатии кнопки, текст на ней меняется на "Нажата!". У всех 
            остальных - "Нажми меня"
        -   С нажатием любой кнопки счётчик увеличивается на 1.
*/

const elements = {
    buttons: document.querySelector('.wrapper__buttons'),
    count: document.querySelector('.wrapper__count'),
    reset: document.querySelector('.button__reset'),
};
elements.reset.addEventListener('click', (e) => {
    elements.count.innerHTML = 0;
});

elements.buttons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    const currentCount = Number(elements.count.innerHTML);
    elements.count.innerHTML = currentCount + 1;
    [...elements.buttons.children].forEach((button) => {
        if (button === event.target) {
            button.innerHTML = 'Нажата!';
            button.classList.add('-active-');
        } else {
            button.innerHTML = 'Нажми меня';
            button.classList.remove('-active-');
        }
    });
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
});
document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
});
