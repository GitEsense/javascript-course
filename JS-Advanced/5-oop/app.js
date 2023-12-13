'use strict';

/*
    Title: Наследование - домашнее задание
    Description: 
        Создать базовый класс персонжа с параметрами: раса, имя, язык и метод - говорить(выводит язык и имя в консоль).
        Создать класс Орка, который наследуется от персонажа, у которого
        есть оружие и который имеет метод - удара.
        Создать класс Эльфа, котоырй наследуется от персонажа, у 
        которого есть типа заклинаний и метод - создать заклинание.
*/
const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.talk = function () {
    console.log(`Язык: ${this.language}, Имя: ${this.name}`);
};

const Ork = function (race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.blow = function () {
    console.log(`${this.race} по имени ${this.name} использует своё оружие ('${this.weapon}') и наносит удар!`);
};

const Elf = function (race, name, language, spell) {
    Character.call(this, race, name, language);
    this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.createSpell = function () {
    console.log(`${this.race} по имени ${this.name} использует своё заклинание ('${this.spell}') и наносит удар!`);
};

const ork = new Ork('Орк', "Гул'дан", 'Орочий', 'Топор');
const elf = new Elf('Эльф', 'Sulmeldis', 'Эльфийский', 'Взрыв');
ork.talk();
ork.blow();

elf.talk();
elf.createSpell();

console.log('ork instanceof Character:', ork instanceof Character);
console.log('ork instanceof Ork:', ork instanceof Ork);
console.log('ork instanceof Elf:', ork instanceof Elf);

console.log('elf instanceof Character:', elf instanceof Character);
console.log('elf instanceof Ork:', elf instanceof Ork);
console.log('elf instanceof Elf:', elf instanceof Elf);
