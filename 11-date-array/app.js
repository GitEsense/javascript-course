const stringArray = [
    '10-02-2022',
    'test',
    '11/12/2023',
    '00/13/2022',
    '00/13/2022',
    'tt/11/20ts',
    '012/011/20ts',
];
function canDelete(array) {
    return array
        .map((el) => (el.split('-').length > 1 ? el.split('-') : el.split('/')))
        .filter(
            ([day, month, year]) =>
                day > 0 && day < 32 && month > 0 && +month < 13 && Number(year)
        )
        .map((array) => array.join('-'));
}

console.table(canDelete(stringArray));
