//  Домашнее задание - Функции высшего порядка
/*
    Напишите функцию, которая принимает :
    -   Массив чисел
    -   Функцию удаления элементов
    И возвращает отфильтрованный массив. При этом функция удаления элементов прниимает число и
    возвращает true, если его надо удалить и false, если надо оставить
*/
const arr = [
    -200, -22, -52, 10, 22, 35, 44, 15, 3, 7, 37, 69, 82, 55, 65, 72, 18, 4, 92,
];

//  Функция фильтрации
function filterArray(array, fn) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const isDelete = fn(array[i]);
        if (!isDelete) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

// Функция условия удаления (вынесено отдельно для удобства чтения)
function canDelete(num) {
    return (
        (num > 2 && num < 5) ||
        num === 7 ||
        (num > 50 && num % 5 === 0) ||
        num % 4 === 0 ||
        num % 11 === 2
    );
}

const result = filterArray(arr, canDelete);
console.log(result);
