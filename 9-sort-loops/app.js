//  Домашнее задание - циклы
/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов.

    Подсказка :
    -   Нужно использовать 2 цикла, вложенных друг в друга
    -   Нужно сравнивать и менять элементы
*/
const arr = [1, 40, -5, 10, 0];
function sortArray(array) {
    const sortArray = Array.from(array);
    for (let i = 0; i < sortArray.length; i++) {
        for (let j = i; j < sortArray.length; j++) {
            if (sortArray[i] > sortArray[j]) {
                [sortArray[i], sortArray[j]] = [sortArray[j], sortArray[i]];
            }
        }
    }
    return sortArray;
}

console.log(sortArray(arr));
