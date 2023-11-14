'use strict';

/*
    Title: Event Loop - домашнее задание
    Description: 
        Сделайте функцию получения координат пользователя, используя
        Geolocation API, но преобразовав его в Promise
*/

function geolocalionPromise() {
    return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
            reject(new Error('Такого API на клиенте не обнаружено'));
        }
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0,
        };
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(new Error(`ERROR(${error.code}): ${error.message}`)),
            options,
        );
    });
}

geolocalionPromise()
    .then(({ coords }) => {
        console.log(`Ты находишься на координатах:`);
        console.log(`latitude: ${coords.latitude}`);
        console.log(`longitude: ${coords.longitude}`);
        console.log(`accuracy: ${coords.accuracy}`);
    })
    .catch((err) => {
        console.warn(err);
    });
