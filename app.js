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

// //  Упраждение - упрощение функции
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

//  Упражнение - функция разбора URL
const url = `https://purpleschool.ru/course/javascript`;

function getUrlParts(url) {
    const [protocol, others] = url.split('://');
    const [domain, ...pathURL] = others.split('/');

    console.log(`protocol: ${protocol}`);
    console.log(`domain: ${domain}`);
    console.log(`pathURL: /${pathURL.join('/')}`);
}

getUrlParts(url);

let array = [1, 2, 3, 4];
const res = array.push(5);
console.log(res);

//  Домашнее задание - Массивы
function crypto(password) {
    const strArray = password.split('');
    const crypt1 = strArray.splice(4);
    strArray.reverse();
    crypt1.reverse();
    for (let i = 1; i < crypt1.length; i++) {
        crypt1.push(crypt1[i]);
        crypt1.splice(i, 1);
    }

    return strArray.concat(crypt1).join('');
}
function check(crypto, password) {
    return password === crypto(password);
}

const str1 = crypto('password');
const res = check(str1, 'password');
