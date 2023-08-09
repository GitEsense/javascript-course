//  Домашнее задание
/* 
    Написать функцию, которая принимает объект query параметров и возрвращает строку для вставки:
    {
        search: 'Вася',
        take: 10,
    }

    //  search=Вася&take=10
*/
const queryParams = {
    search: 'Вася',
    take: 10,
};

function objectToQueryString(query) {
    const queryArray = new Array();
    for (const key of Object.keys(query)) {
        queryArray.push(`${key}=${query[key]}`);
    }
    return queryArray.join('&');
}

console.log(objectToQueryString(queryParams));
