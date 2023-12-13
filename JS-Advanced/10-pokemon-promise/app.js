'use strict';

/*
    Title: Promises - домашнее задание
    Description: 
        Перепишите предыдущий пример (STEP - 11) на цепочку Promise
    
    Description from Step 11:
        Сделайте запрос на 'https://pokeapi.co/api/v2/pokemon/ditto'

        После получения, получите информацию о первой его ability по ссылке,которая приходит при первом запросе.
        Там найдите описание на английском и выведите в консоль.
*/

function jsonParse(response) {
    try {
        return JSON.parse(response);
    } catch (e) {
        return 'Ошибка парсинга JSON';
    }
}

function request(url, options) {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            return response.text().then((text) => {
                throw new Error(JSON.stringify({ code: response.status, message: `${url} - ${text}` }));
            });
        }
        return response.json();
    });
}

request('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(({ abilities }) => {
        const { ability } = abilities[0];
        const { url } = ability;
        return request(url);
    })
    .then(({ effect_entries }) => {
        const { effect } = effect_entries.find(({ language }) => language.name === 'en');
        console.log(effect);
    })
    .catch((error) => {
        console.log(jsonParse(error.message));
    });
