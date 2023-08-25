//  Домашнее задание
/*
    Дан массив строк ['10-02-2022','тест','11/12/2023','00/13/2022','41/12/2023'];
    Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату
    (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида: 
    -   ['10-02-2022','12-11-2023']
*/

const stringArray = [
    '10-02-2022',
    'тест',
    '11/12/2023',
    '00/13/2022',
    '41/12/2023',
    '02/29/2023',
    '02/29/2024',
    'tt/11/20ts',
    '012/011/20ts',
];

function canDelete(array, fn) {
    return array
        .map((element) => {
            let splitArray = element.split('-');
            if (splitArray.length < 3) {
                splitArray = element.split('/');
                if (splitArray.length === 3) {
                    const [day] = splitArray.splice(1, 1);
                    splitArray.unshift(day);
                }
            }
            return splitArray;
        })
        .filter((dateArray) => fn(dateArray))
        .map((array) => array.join('-'));
}

function filterPattern(array) {
    const [day, month, year] = array;
    const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysPerMonth = [
        31,
        leapYear ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    return (
        day > 0 &&
        day <= daysPerMonth[month - 1] &&
        month > 0 &&
        month < 13 &&
        year > 1900
    );
}

console.log(canDelete(stringArray, filterPattern));
