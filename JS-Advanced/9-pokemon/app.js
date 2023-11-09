'use strict';

/*
    Title: Асинхронный JavaScript - домашнее задание
    Description: 
        Сделайте запрос на 'https://pokeapi.co/api/v2/pokemon/ditto'

        После получения, получите информацию о первой его ability по ссылке, которая приходит при первом запросе. Там найдите описание на английском и выведите в консоль.
*/

/* 
    ------------------------------------------
    VARIANT 1
    ------------------------------------------
*/

function jsonParse(response) {
    try {
        return JSON.parse(response);
    } catch (e) {
        console.error(e);
    }
}

function getPokemon() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    xhr.send();

    xhr.addEventListener('load', function () {
        const json = jsonParse(this.responseText);
        const { abilities } = json;
        const { ability } = abilities[0];
        getEffect(ability.url);
    });
}

function getEffect(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', function () {
        const { effect_entries } = jsonParse(this.responseText);
        const { effect } = effect_entries.find(({ language }) => language.name === 'en');
        console.log(effect);
    });
}
getPokemon();

/* 
    ------------------------------------------
    VARIANT 2
    ------------------------------------------
*/

function request(url, callback, method = 'GET', body = {}) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.send(body);

    xhr.addEventListener('load', function () {
        const json = jsonParse(this.responseText);
        callback(json, printEffect);
    });
}

function parseEffect(json, callback) {
    const { abilities } = json;
    const { ability } = abilities[0];
    const { url } = ability;

    request(url, callback);
}

function printEffect(json) {
    const { effect_entries } = json;
    const { effect } = effect_entries.find(({ language }) => language.name === 'en');
    console.log(effect);
}

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
request(url, parseEffect);
