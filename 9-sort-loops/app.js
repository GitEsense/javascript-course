//  Домашнее задание - циклы
const arr = [1, 40, -5, 10, 0];
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let temp = array[i];
            if (temp < array[j]) {
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sortArray(arr));
