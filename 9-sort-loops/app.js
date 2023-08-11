//  Домашнее задание - циклы
/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов.

    Подсказка :
    -   Нужно использовать 2 цикла, вложенных друг в друга
    -   Нужно сравнивать и менять элементы
*/
const arr = [1, 40, -5, 10, 0];
function sortArrayInAscending(array) {
    const resultArray = [...array];
    for (let i = 0; i < resultArray.length; i++) {
        for (let j = i; j < resultArray.length; j++) {
            if (resultArray[i] > resultArray[j]) {
                [resultArray[i], resultArray[j]] = [
                    resultArray[j],
                    resultArray[i],
                ];
            }
        }
    }
    return resultArray;
}

console.log(sortArrayInAscending(arr));
