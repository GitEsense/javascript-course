// //  Упражнение - Размещение депозита

// const deposit = 12000;
// const rate = 0.07;
// const depositLength = 24;

// const res = deposit * (1 + rate / 12) ** depositLength;
// const houseCost = 13900;
// if (res >= houseCost) {
//     console.log(`Да, спустя два года на вкладе будет ${res.toFixed(2)}$`);
// } else {
//     console.log(`Нет, не хватает ${(houseCost - res).toFixed(2)}$`);
// }

// // Операторы равенства
// const secretNumber = '7';

// if (Number(secretNumber) === 7) {
//     console.log('угадал строго');
// }

// if (secretNumber == 7) {
//     console.log('Угадал не строго');
// }

// const q = Number(prompt('Введите число'));
// if (q === 7) {
//     console.log('!');
// }

// //  Switch
// const role = 'manuserAger';

// if (role === 'manuserAger') {
//     console.log('manuserAger');
// } else if (role === 'admin') {
//     console.log('admin');
// } else if (role === 'ceo') {
//     console.log('СЕО');
// } else {
//     console.log('Мы тебя не знаем');
// }

// switch (role) {
//     case 'manuserAger':
//         console.log('Менеджер');
//         break;
//     case 'admin':
//         console.log('admin');
//         break;
//     case 'ceo':
//         console.log('СЕО');
//         break;
//     default:
//         console.log('Мы тебя не знаем');
// }

// const num = 1;

// switch (true) {
//     case num > 0:
//         console.log('Положительный');
//         break;
//     case num < 0:
//         console.log('Отрицательный');
//         break;
//     default:
//         console.log('Ноль');
// }

// //  Тернарные Операторы
// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 20000;
// let messuserAge =
//     budget > bmwX3Price
//         ? 'BMW'
//         : budget > fordFocusPrice
//         ? 'FORD'
//         : 'Велосипед';

// console.log(`Я хочу купить ${messuserAge}`);

// //  Проверка робота
// const str = prompt('Сколько будет 7 + или - 15 ?');

// if (str === 'Я не робот') {
//     console.log('Успех');
// } else {
//     const resNum = Number(str);
//     switch (resNum) {
//         case -8:
//         case 22:
//             console.log(`Успех`);
//             break;
//         default:
//             console.log('Вы робот!');
//     }
// }

// const a = 3;
// switch (a) {
//     case 5:
//         console.log('1');
//         break;
//     case 4:
//         console.log('2');
//         break;
//     default:
//         console.log('3');
//     case 2:
//         console.log('4');
// }

// //  Логические Операторы
// const isAdmin = true;
// const canWrite = true;

// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный пользователь ${isAdmin || canWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`);

// const isEdited = true;
// const isSuperAdmin = true;

// console.log(
//     `Системный файл с редактированием ${
//         isAdmin && canWrite && (!isEdited || isSuperAdmin)
//     }`
// );

// //  Операторы с другими типами данных
// console.log('Вася' || 'Олег');
// console.log(false || 'Олег');
// console.log('Вася' || false);
// console.log(false || false);

// console.log('Вася' && 'Олег');
// console.log(false && 'Олег');
// console.log('Вася' && false);
// console.log(false && false);

// let a = 'Марина';
// const username = a || 'Петя';
// console.log(username);

// const isAdmin = true;
// const filename = isAdmin && 'file.mp4';
// console.log(filename);

// //  Операторы нулевого слияния
// let username = 'Вася';
// console.log(username || 'Default Username');
// console.log(username ?? 'Default Username');

// //  Проверка прав
// let balance = 999;
// let bonusBalance = 102;
// const isBanned = false;
// const isExists = false;
// const isSelling = true;

// if (
//     (balance > 1000 || bonusBalance > 100) &&
//     !isBanned &&
//     !isExists &&
//     isSelling
// ) {
//     console.log('Может купить игру');
// } else {
//     console.log(`Не может приобрести, облом`);
// }

// //  Введение в функции
// function logName(name, surname) {
//     console.log(`Моё имя ${name} ${surname}`);
// }

// logName('Антон', 'Ларичев');

// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month;
// }

// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1.toFixed(2));

// const example2 = countDepositSum(1000, 48, 0.1);
// console.log(example2.toFixed(2));

// //  Анонимные функции
// console.log(powerOfTwo(5));
// function powerOfTwo(num) {
//     return num * num;
// }

// const poft = (num) => {
//     return num * num;
// };
// console.log(poft(6));

// //  Стрелочные функции
// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(5));

// const poft = (num) => {
//     return num ** 2;
// };

// console.log(poft(6));

// //  Упражнение - упрощение функции
// function toPower(num, power) {
//     const res = num ** power;
//     return res;
// }

// const toPowerArrow = (num, power) => num ** power;

// console.log(
//     toPower(2, 4) === toPowerArrow(2, 4),
//     `toPower: ${toPower(2, 4)}`,
//     `toPowerArrow: ${toPowerArrow(2, 4)}`
// );

// //  Параметры по умолчанию
// function toPower(num, power = 2) {
//     const res = num ** power;
//     return res;
// }

// console.log(toPower(4, 3));
// console.log(toPower(9));

// //  Условия в функциях
// function canAccessWebsite(userAge) {
//     if (userAge < 18) {
//         return 'Нет';
//     }
//     return 'Да';
// }

// console.log(canAccessWebsite(18));

// const canAccessWebsite2 = (userAge) => (userAge < 18 ? 'Нет' : 'Да');
// console.log(canAccessWebsite2(18));

// //  Функции в функциях
// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// const calculateW = (present) => present * KG_IN_USD;

// const calculateKM = (distance) => distance * KM_IN_USD;

// function getExchangePrice(present1, present2, distance) {
//     const price1 = calculateW(present1);
//     const price2 = calculateW(present2);
//     const distancePrice = calculateKM(distance);
//     return price1 + price2 + distancePrice;
// }

// console.log(getExchangePrice(1, 2, 10));

// //  Упражнение - Кредит на MacBook
// const userAge = 24;
// const hasJob = true;
// const userMoney = 1800;

// function computeCredit(userAge, hasJob = false) {
//     if (userAge >= 24 && hasJob) {
//         return 500;
//     } else if (userAge >= 24) {
//         return 100;
//     }
//     return 0;
// }

// function canBuyMacBook(userAge, userMoney, hasJob = false) {
//     const macbookPrice = 2000;
//     const totalUserMoney =
//         userMoney < macbookPrice
//             ? userMoney + computeCredit(userAge, hasJob)
//             : userMoney;
//     return totalUserMoney >= macbookPrice;
// }

// const res1 = canBuyMacBook(userAge, userMoney);
// const res2 = canBuyMacBook(userAge, userMoney, hasJob);
// console.log(`hasJob false: ${res1}`, `hasJob true: ${res2}`);

// //  Знакомство с массивамиbp
// const roles = ['admin', 'user', 'superuser'];
// const isIncludes = roles.includes('admin');
// console.log(isIncludes);

// console.log(roles.at(-1).startsWith('s'));

// const arr1 = new Array(5).fill().map((_) => (Math.random() * 1000).toFixed(2));
// const arr2 = [...Array(5)].map((_) => (Math.random() * 1000).toFixed(2));
// const arr3 = new Array(5);

// for (let i = 0; i < arr3.length; i++) {
//     arr3[i] = (Math.random() * 1000).toFixed(2);
// }

// console.log([...arr1, ...arr2, ...arr3]);

//  Управление элементами массива
// const obj2 = {
//     uuu: 111,
//     bbb: 222,
//     ccc: undefined,
//     ggg: undefined,
//     login: {
//         username: 'test',
//         password: 'testpassword',
//     },
//     user: {
//         id: 12345,
//         firstname: 'firstname',
//         lastname: 'lastname',
//     },
//     message: {
//         msgId: 12345,
//         msgText: 'новый текст',
//         msgEdit: undefined,
//         msgDate: Date.now(),
//     },
// };
// const obj = {
//     uuu: 111,
//     bbb: 222,
//     ccc: undefined,
//     ggg: undefined,
//     username: 'test',
//     password: 'testpassword',
//     id: 12345,
//     firstname: 'firstname',
//     lastname: 'lastname',
//     msgId: 12345,
//     msgText: 'новый текст',
//     msgEdit: undefined,
//     msgDate: Date.now(),
// };
// class Test {
//     constructor(obj) {
//         const user = ['id', 'firstname', 'lastname'];
//         const message = ['msgId', 'msgText', 'msgEdit', 'msgDate'];
//         const login = ['username', 'password'];
//         for (let key in obj) {
//             if (!!obj[key]) {
//                 switch (true) {
//                     case user.includes(key):
//                         this['user'] ??= {};
//                         this.user[key] = obj[key];
//                         break;
//                     case message.includes(key):
//                         this['message'] ??= {};
//                         this.message[key] = obj[key];
//                         break;
//                     case login.includes(key):
//                         this['login'] ??= {};
//                         this.login[key] = obj[key];
//                         break;
//                     default:
//                         this[key] = obj[key];
//                 }
//             }
//         }
//     }

//     get() {
//         return this;
//     }
// }

// const testClass = new Test(obj);
// console.log(obj);
// console.log(testClass.get());

// //  Поиск элементов
// const roles = ['user', 'admin', 'manager', 'admin'];

// const elIndex = roles.indexOf('admin');
// console.log(elIndex);
// const elIndex2 = roles.indexOf('superuser');
// console.log(elIndex2);

// if (roles.indexOf('superuser') >= 0) {
//     console.log('Доступ есть');
// }

// console.log(roles.includes('admin'));
// console.log(roles.includes('superadmin'));

// if (roles.includes('admin')) {
//     console.log('Доступ есть');
// }

// //  Slice, splice, concat, reverse
// const roles = ['user', 'admin', 'manager', 'superuser'];
// const res = roles.slice(2);
// console.log(roles);
// console.log(res);

// const res2 = roles.slice(2, 3);
// console.log(roles);
// console.log(res2);

// const res3 = roles.slice(-1);
// console.log(roles);
// console.log(res3);

// const res4 = roles.slice(1, -2);
// console.log(roles);
// console.log(res4);

// const res5 = roles.splice(2);
// console.log(roles);
// console.log(res5);

// const res6 = roles.splice(2, 2);
// console.log(res6);
// console.log(roles);

// const res7 = roles.splice(-1);
// console.log(res7);
// console.log(roles);

// const res8 = roles.reverse();
// console.log(res8);
// console.log(roles);

// const newRoles = ['sysadmin', 'developer'];
// const res9 = roles.concat(newRoles);
// console.log(res9);

// //  Из строки в массив и обратно
// const roles = ['user', 'admin', 'manager', 'superuser'];

// const url = 'auth/user/login';
// const res = url.split('/');
// console.log(res);

// console.log(res.join('-'));

// //  Упражнение - Обновление списка задач
// const tasks = ['Задача 1'];

// function Add(task) {
//     return tasks.push(task);
// }
// function Remove(task) {
//     const elIndex = tasks.indexOf(task);
//     if (elIndex < 0) {
//         return console.log(`${task} не найдена`);
//     }
//     return tasks.splice(elIndex, 1);
// }

// function Prioritize(task) {
//     const result = Remove(task);
//     if (!result) {
//         return;
//     }
//     return tasks.unshift(task);
// }

// Add('Задача 2');
// Add('Задача 3');
// Add('Задача 4');
// Add('Задача 5');
// console.log(tasks);

// Remove('Задача 3');
// console.log(tasks);

// Prioritize('Задача 4');
// console.log(tasks);

//  Принцип DRY
// //  Деструктуризация
// const userData = ['Антон', 18, 'Москва'];

// function getData() {
//     return ['Антон', 18, 'Москва'];
// }

// const [userName, age, city] = userData;
// console.log(userName, age, city);

// //  Rest Оператор
// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = data;
// console.log(one, two, others);

// //  Упражнение - функция разбора URL
// const url = `https://purpleschool.ru/course/javascript`;

// function getUrlParts(url) {
//     const [protocol, others] = url.split('://');
//     const [domain, ...pathURL] = others.split('/');

//     console.log(`protocol: ${protocol}`);
//     console.log(`domain: ${domain}`);
//     console.log(`pathURL: /${pathURL.join('/')}`);
// }

// getUrlParts(url);

// //  Циклы for
// for (let i = 0, p = 200; i < 10; i += 2, p -= 10) {
//     console.log(i + p);
// }

// //  break и continue
// const tasks = [
//     'Задача 1',
//     'Задача 2',
//     'Задача 3',
//     'Задача 4',
//     'Задача 5',
//     'Задача 6',
// ];

// for (let i = 0; i < tasks.length; i++) {
//     if (i % 3 === 0) {
//         console.log('Остаток :', i % 3);
//         console.log('Стоянка :', tasks[i]);
//         continue;
//     }
//     console.log(tasks[i]);
// }
// console.log('-----------------------------');
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         break;
//     }
//     console.log(tasks[i]);
// }

// //  Циклы for of и for in
// const arr = [1, 4, 8, 7, '-----------------------'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const element of arr) {
//     console.log(element);
// }

// for (let index in arr) {
//     console.log(arr[index]);
// }

// //  Упражнение - расчёт итогового баланса
// const operations = [1000, -700, 300, -500, 10000];
// const startBalance = 100;

// function totalBalance(operations, startBalance = 0) {
//     let balance = startBalance;
//     for (const operation of operations) {
//         balance += operation;
//     }
//     return balance;
// }

// function isPositiveBalance(balance) {
//     return balance < 0;
// }

// function averageBalance(operations) {
//     let averageIncome, averageConsumption;
//     let income = [],
//         consumption = [];
//     for (const operation of operations) {
//         if (operation < 0) {
//             consumption.push(operation * -1);
//         } else {
//             income.push(operation);
//         }
//     }
//     averageIncome = totalBalance(income) / income.length;
//     averageConsumption = totalBalance(consumption) / consumption.length;
//     return [averageIncome, averageConsumption];
// }

// console.log(`Итоговый баланс: ${totalBalance(operations, startBalance)}`);
// const [averageIncome, averageConsumption] = averageBalance(operations);
// console.log('Средний доход', averageIncome);
// console.log('Средний расход', averageConsumption);

// //  callback
// function add(a, b) {
//     return a + b;
// }

// function subtrack(a, b) {
//     return a - b;
// }

// function calculate(a, b, fn) {
//     console.log(fn.name);
//     return fn(a, b);
// }

// console.log(calculate(5, 3, add));

// //  Возврат функции
// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }

// const powerOfTwo = power(2);
// const powerOfThree = power(3);
// console.log(powerOfTwo(5));
// console.log(powerOfThree(5));

// console.log(power(5)(4));

// //  Упражнение - стрелочные функции

// const power = (pow) => (num) => num ** pow;

// const powerOfTwo = power(2);
// const powerOfThree = power(3);
// console.log(powerOfTwo(5));
// console.log(powerOfThree(5));

// console.log(power(5)(4));

// //  forEach, map
// const score = [5, 10, 0, 15];

// for (const [i, item] of score.entries()) {
//     console.log(`Раунд ${i + 1}: ${item}`);
// }
// console.log(`----------------------------------`);

// score.forEach((scoreEl, index, arr) =>
//     console.log(`Раунд ${index + 1}: ${scoreEl}`, arr)
// );

// const transactionInUSD = [10, -7, 50, -10, 100];
// const transactionInRUB = transactionInUSD.map(
//     (transaction) => transaction * 60
// );
// console.log(transactionInUSD);
// console.log(transactionInRUB);

// //  filter
// const operations = [100, -20, 7, -20, 50];
// const positiveOperations = operations
//     .filter((operation) => operation > 0)
//     .map((el) => el * 60)
//     .filter((el) => el < 3000);
// console.log(positiveOperations);

// //  Упражнение - вывод изменения цен
// const prices = [
//     [100, 200],
//     [120, 100],
//     [200, 350],
// ];
// let res = prices.map(([x, y]) => y - x).filter((el) => el > 0);
// console.log(res);

// //  reduce
// const operations = [100, -20, 7, -30, 50];
// const balance = operations.reduce((acc, operation, i) => {
//     console.log(`Итерация: ${i}, acc: ${acc}, operation: ${operation}`);
//     return (acc += operation);
// }, 0);
// console.log(balance);

// //  Упражнение - среднее значение
// const arr = [1, 4, 4, 10];
// const avg = arr.reduce((acc, value, i) =>
//     i === arr.length - 1 ? (acc + value) / arr.length : (acc += value)
// );
// console.log(avg);

// //  find и findindex
// const arr = [2, 4, 4, 10];
// const res = arr.find((el) => el > 3);
// const res1 = arr.findIndex((el) => el > 3);
// console.log('значение: ' + res, 'индекс: ' + res1);

//Упражнение - реализация some
/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

// const arr = [2, 4, 4, 10, 20];
// function some(array, element) {
//     return array.find((el) => el === element) != undefined;
// }

// console.log(some(arr, 3));

// //  flat и flatMap
// const prices = [
//     [2, 4],
//     [3, 4],
//     [10, [20, 50]],
// ];
// console.table(prices.flat(2));
// console.table(prices.flatMap((el) => el.concat([1])));

// //  sort
// const users = ['Вася', 'Маша', 'Катя', 'Аня'];
// console.log(users);
// users.sort();
// console.log(users);

// const operations = [100, -20, 7, -30, 50];
// operations.sort((a, b) => b - a);
// console.log(operations);

// const array = [1, 2, 3, 4, 5];
// console.log(new Array(1, 2, 3, 4, 5));

// const array2 = new Array(5);
// console.log(array2.fill(1, 0, 2));

// const array3 = Array.from(
//     { length: 10 },
//     () => +(Math.random() * 1000).toFixed(2)
// );
// console.log(array3);

// const stringArray = [
//     '10-02-2022',
//     'test',
//     '11/12/2023',
//     '00/13/2022',
//     '00/13/2022',
//     'tt/11/20ts',
//     '012/011/20ts',
// ];

// function canDelete(array) {
//     return array
//         .map((el) => (el.split('-').length > 1 ? el.split('-') : el.split('/')))
//         .filter(
//             ([day, month, year]) =>
//                 day > 0 && day < 32 && month > 0 && +month < 13 && Number(year)
//         )
//         .map((array) => array.join('-'));
// }

// function canDelete2(array) {}

// console.table(canDelete(stringArray));
// console.table(stringArray);

// //  Домашнее задание
// /*
//     Дан массив строк ['10-02-2022','тест','11/12/2023','00/13/2022','41/12/2023'];
//     Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату
//     (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида:
//     -   ['10-02-2022','12-11-2023']
// */

// const stringArray = [
//     '10-02-2022',
//     'тест',
//     '11/12/2023',
//     '00/13/2022',
//     '41/12/2023',
//     '02/29/2023',
//     '02/29/2024',
//     'tt/11/20ts',
//     '012/011/20ts',
// ];

// function canDelete(array, fn) {
//     return array
//         .map((element) => {
//             let splitArray = element.split('-');
//             if (splitArray.length < 3) {
//                 splitArray = element.split('/');
//                 if (splitArray.length === 3) {
//                     const [day] = splitArray.splice(1, 1);
//                     splitArray.unshift(day);
//                 }
//             }
//             return splitArray;
//         })
//         .filter((dateArray) => fn(dateArray))
//         .map((array) => array.join('-'));
// }

// function filterPattern(array) {
//     const [day, month, year] = array;
//     const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
//     const daysPerMonth = [
//         31,
//         leapYear ? 29 : 28,
//         31,
//         30,
//         31,
//         30,
//         31,
//         31,
//         30,
//         31,
//         30,
//         31,
//     ];

//     return (
//         day > 0 &&
//         day <= daysPerMonth[month - 1] &&
//         month > 0 &&
//         month < 13 &&
//         year > 1900
//     );
// }

// console.log(canDelete(stringArray, filterPattern));

// //  Работа со строками
// const fullUserName = 'Вася aka Terminator Пупкин';
// const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
// const userSurName = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1);
// console.log(userName, userSurName);

// const str = 'Вася Пупкин';
// console.log(str.includes('а'));
// console.log(str.startsWith('а'));
// console.log(str.endsWith('а'));

// console.log(new String('Вася Пупкин'));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace('В', 'Ф'));
// console.log(str.replace('П', 'Д'));
// console.log(str.replace('а', 'и'));
// console.log(str.replaceAll('а', 'и'));
// console.log(str.replace(/a/g, 'и'));

// const str2 = ' Вася Пупкина     \n';
// console.log(str2.trim());
// console.log(str2.trimStart());
// console.log(str2.trimEnd());

// //  Упражнение - проверка номера
// /* верные */
// const num1 = '89103235356';
// const num2 = '+79103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = ' +7(910) 323-53-56 ';
// /* не верные */
// const num1Error = '89103235';
// const num2Error = '+7d910d323-53-56';
// const num3Error = '9+7103235356';
// const num4Error = '89103g35356';

// function isValid(num) {
//     num = num.trim().replace('+7', 8);
//     if (!num.startsWith('8')) {
//         return false;
//     }

//     num = num
//         .replaceAll('(', '')
//         .replaceAll(')', '')
//         .replaceAll('-', '')
//         .replaceAll(' ', '');
//     if (num.length != 11) {
//         return false;
//     }

//     let onlyNumber = true;
//     for (const char of num) {
//         if (isNaN(Number(char))) {
//             onlyNumber = false;
//             break;
//         }
//     }
//     return onlyNumber;
// }

// console.log(isValid(num1), num1);
// console.log(isValid(num2), num2);
// console.log(isValid(num3), num3);
// console.log(isValid(num4), num4);
// console.log(isValid(num5), num5);

// console.log(isValid(num1Error));
// console.log(isValid(num2Error));
// console.log(isValid(num3Error));
// console.log(isValid(num4Error));

// const userFullName = 'Вася Пупкин Васильевич';
// console.log(userFullName.split(' '));
// const [firstName, familyName, lastName] = userFullName.split(' ');
// console.log(firstName);
// console.log(familyName);
// console.log(lastName);

// const arr = ['Ты', 'знаешь', 'JS'];
// console.log(arr.join(' '));

// const film = 'Звёздные войны';
// console.log(film.padStart());

// //  Упражнение - максировка карты
// const card = '2342834503458353';
// console.log(
//     ('*'.repeat(card.length / 4) + ' ')
//         .repeat(card.length / 4 - 1)
//         .concat(card.slice(-4))
// );

// const userArray = ['Вася', 'Пупкин', 24];
// const user = {
//     name: 'Вася',
//     surname: 'Пупкин',
//     age: 24,
//     skills: ['Программирование', 'Готовка'],
//     eduBasic: 'Школа 10',
//     eduPro: 'МФТИ',
// };
// console.log(user['skills']);
// const level = 'Pro';
// console.log(user['edu' + level]);

// //const res = prompt('Введите свойство');
// user['city'] = 'Москва';
// console.log(user);

// user.age = 30;
// console.log(user);

// //  Упражнение - сортировка пользователей
// const users = [
//     {
//         name: 'Вася',
//         age: 30,
//     },
//     {
//         name: 'Катя',
//         age: 18,
//     },
//     {
//         name: 'Аня',
//         age: 40,
//     },
//     {
//         name: 'Петя',
//         age: 25,
//     },
// ];

// const result = users.sort((a, b) => a.age - b.age);
// console.log(result);

// //  Упражнение - преобразование объектов
// const users = [
//     {
//         name: 'Вася',
//         surname: 'Пупкин',
//         age: 30,
//         skills: ['Разработка', 'Dev0ps'],
//     },
//     {
//         name: 'Катя',
//         surname: 'Белова',
//         age: 18,
//         skills: ['Дизайн'],
//     },
// ];

// const result = users.map((user) => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skillNum: user.skills.length,
//     };
// });
// console.log(result);

// const user = {
//     name: 'Вася',
//     surname: 'Пупкин',
//     age: 24,
//     getFullName: function () {
//         console.log(this);
//         return this.name + ' ' + this.surname;
//     },
// };
// console.log(user.getFullName());

// //  Упражнение - кошелёк
// /* Реализовать методы увеличения и уменьшения баланса,
// при котором каждая операция сохраняется в массив
// operations в виде { reason: 'Оплата налогов', sum: -100 }.
// Возвращается true, если успешно и false, если не зватает баланса.
// Также реализовать метод вывода числа операций по кошельку
// */

// const wallet = {
//     balance: 0,
//     operations: [],
//     increase: function (reason, sum) {
//         this.operations.push({ reason, sum });
//         this.balance += sum;
//         return true;
//     },
//     decrease: function (reason, sum) {
//         if (this.balance < sum) {
//             console.log('Недостаточно баланса');
//             return false;
//         }
//         this.balance -= sum;
//         this.operations.push({ reason, sum: -sum });
//         return true;
//     },
//     getCountTransaction: function () {
//         return this.operations.length;
//     },
// };

// console.log(wallet.increase('Зарплата', 10000));
// console.log(wallet.decrease('Покупка продуктов', 5000));
// console.log(wallet.decrease('Выезд на природу', 3000));
// console.log(wallet.decrease('Поездка на такси', 3000));
// console.log(wallet.operations);
// console.log(wallet.getCountTransaction());

// const cities = {
//     msk: {
//         let: 200,
//         temp: { celcius: 25 },
//     },
//     spb: {
//         lt: 100,
//     },
// };
// let sumTemp = 0;
// let citiesCount = Object.keys(cities).length;
// for (const key in cities) {
//     console.log(key);
//     sumTemp += cities[key].temp;
// }

// console.log(sumTemp / citiesCount);

// sumTemp = 0;
// for (const key of Object.keys(cities)) {
//     sumTemp += cities[key].temp;
// }

// let userProfile = {
//     username: 'Вася',
//     age: 30,
//     city: 'Москва',
// };

// const { age, username, ...other } = userProfile;
// console.log(age, username, other);

// const additionalData = {
//     skills: ['Разработка', 'Дизайн'],
//     creditCard: '2324-2424-4242-2236',
// };

// userProfile = {
//     ...userProfile,
//     ...additionalData,
// };
// console.log(userProfile);

// const city = 'spb';
// if (cities[city] != undefined && cities[city].temp != undefined) {
//     console.log(cities[city].temp.celcius);
// }

// console.log(cities[city]?.temp?.celcius ?? 'Нет');

// //  Упражнение - склад
// const warehouse = {
//     goods: [],
//     findGoodById: function (id) {
//         return this.goods.find((el) => el.id === id);
//     },
//     addGood: function (good) {
//         const existedGood = this.findGoodById(good.id);
//         if (existedGood) {
//             console.log('Товар уже существует');
//             return false;
//         }
//         this.goods.push(good);
//         console.log(`Товар с ID: ${good.id} добавлен`);
//         return true;
//     },
//     getWeightKg: function () {
//         return this.goods.reduce((acc, el) => acc + (el?.weight?.kg ?? 0), 0);
//     },
// };

// const car = {
//     id: 1,
//     weight: { kg: 1000 },
//     brand: 'Ford',
// };

// const chair = {
//     id: 2,
//     weight: { kg: 2 },
// };

// const paper = {
//     id: 3,
//     color: 'red',
// };

// warehouse.addGood(car);
// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(paper);

// console.log('Общий вес: ' + warehouse.getWeightKg() + 'кг');
// console.log(warehouse.findGoodById(3));
// console.log(warehouse.findGoodById(1));
// console.log(warehouse.findGoodById(2));
