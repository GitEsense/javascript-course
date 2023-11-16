'use strict';
/*
    Title: Современный Асинхронный JavaScript - домашнее задание
    Description: 
        Сделать функцию race(), которая будет принимать массив Promise, и
        возвращать первый успешно выполненный или отклонённый.
*/

async function request(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(JSON.stringify({ code: response.status, message }));
    }
    return response;
}

function sleep(ms = Math.random() * 200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
let countToError = 0;
async function randomPromiseResult(user) {
    countToError++;
    if (countToError === 6 || countToError === 8) {
        throw new Error('count = 6 || 8');
    }
    if (!(user?.username && user?.password)) {
        throw new Error("it's not user!");
    }
    const { username, password } = user;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            username,
            password,
        }),
    };
    const response = await request('https://dummyjson.com/auth/login', options);
    await sleep();
    return await response.json();
}

async function promiseAll(array) {
    let count = 0;
    return new Promise((resolve, reject) => {
        const result = [];
        array.map((promise, index) => {
            Promise.resolve(promise).then((value) => {
                result[index] = value;
                count++;
                if (count === array.length) {
                    resolve(result);
                }
            }, reject);
        });
    });
}

async function promiseAllSettled(array) {
    return promiseAll(
        array.map((promise) =>
            Promise.resolve(promise).then(
                (value) => ({ status: 'fulfilled', value }),
                (error) => ({ status: 'rejected', reason: error }),
            ),
        ),
    );
}

Promise.all;
async function promiseRace(array) {
    return new Promise((resolve, reject) => {
        array.map((promise) =>
            Promise.resolve(promise).then(
                (value) => resolve(value),
                (error) => reject(error),
            ),
        );
    });
}
async function getData(length = 10) {
    try {
        const response = await request(`https://dummyjson.com/users`);
        const { users } = await response.json();
        return Array.from({ length }, (_, index) => randomPromiseResult(users[index]));
    } catch (e) {
        console.warn(e);
    }
}

(async () => {
    const data = await getData();

    const result1 = await promiseAllSettled(data);
    console.log(result1);

    const result2 = await promiseRace(data.slice(0, 5));
    console.log(result2);

    const result3 = await promiseAll(data.slice(0, 5));
    console.log(result3);
})();
