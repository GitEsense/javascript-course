//  Домашнее задание - циклы
/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов.

    Подсказка :
    -   Нужно использовать 2 цикла, вложенных друг в друга
    -   Нужно сравнивать и менять элементы
*/
const numbers = Array.from({ length: 1000 }, () => {
    const max = 1000000;
    const min = 1000;
    const factor = Math.random() > 0.5 ? 1 : -1;
    const randomNumber = Math.ceil(Math.random() * (max - min)) + min;
    return randomNumber * factor;
});

function orderTemplate(firstNumber, secondNumber, desc) {
    if (!desc) {
        return firstNumber > secondNumber;
    }
    return firstNumber < secondNumber;
}

function sortArrayInAscending(incomingArray, desc = false) {
    const array = [...incomingArray];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            const isExchange = orderTemplate(array[i], array[j], desc);
            if (isExchange) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(numbers);
console.log('Отсортированный по возрастанию массив:', sortArrayInAscending(numbers));
console.log('Отсортированный по убыванию массив:', sortArrayInAscending(numbers, true));
