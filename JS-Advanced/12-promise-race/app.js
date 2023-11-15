'use strict';
/*
    Title: Современный Асинхронный JavaScript - домашнее задание
    Description: 
        Сделать функцию race(), которая будет принимать массив Promise, и
        возвращать первый успешно выполненный или отклонённый.
*/

const request = async (url, options = {}) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(JSON.stringify({ code: response.status, message }));
    }
    return response;
};

function randomPromiseResult(user) {
    return new Promise(async (resolve, reject) => {
        if (!(user?.username && user?.password)) {
            return reject(new Error("it's not user!"));
        }
        const { username, password } = user;
        const response = await request('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        resolve(response.json());
    });
}

async function race() {
    try {
        const length = 5;
        const response = await request(`https://dummyjson.com/users`);
        const { users } = await response.json();
        const promisesArray = Array.from({ length }, (_, index) => randomPromiseResult(users[index]));
        const result = await Promise.race(promisesArray);
        console.log(result);
    } catch (e) {
        console.warn(e);
    }
}

race();
