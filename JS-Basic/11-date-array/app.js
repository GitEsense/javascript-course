//  Домашнее задание
/*
    Дан массив строк ['10-02-2022','тест','11/12/2023','00/13/2022','41/12/2023'];
    Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату
    (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида: 
    -   ['10-02-2022','12-11-2023']
*/

/*
    VARIANT 1
*/

const stringArray = [
    '31-01-2022',
    '29-02-2024',
    '29-02',
    '2024-12-03',
    '29-02-2023',
    'тест',
    '11/12/2023',
    '00/13/2022',
    '41/12/2023',
    '02/29/2023',
    '02/29/2024',
    'tt/11/20ts',
    '012/011/20ts',
];

function getDates(array, fn) {
    const resultArr = [...array];
    return resultArr
        .map(stringToArray)
        .filter(fn)
        .map((array) => array.join('-'));
}

function stringToArray(dateString) {
    let [day, month, year] = dateString.split('-');
    if (!year) {
        [month, day, year] = dateString.split('/');
    }
    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }

    return [day, month, year];
}

function checkCorrectDate(array) {
    if (array === null) {
        return false;
    }

    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    const [day, month, year] = array.map(Number);

    const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

    // check month
    if (month > 12 || month < 1) {
        return false;
    }

    // check day
    if (day > 31 || day < 1) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    // check February for correct day and leap year
    if (month === 2) {
        if (day === 30 || (day === 29 && !isLeapYear)) {
            return false;
        }
    }

    return true;
}

console.log(getDates(stringArray, checkCorrectDate));
