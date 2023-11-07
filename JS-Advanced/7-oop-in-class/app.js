'use strict';
/*
    Title: Принципы ООП в классах - домашнее задание
    Description: 
        Повторите упражнение из раздела 7, но используя классы.
        Сдейлайте переопределение метода говорить для эльфа и для орка.
        
    Description from Step 7:
        Создать базовый класс персонжа с параметрами: раса, имя, язык и метод - говорить(выводит язык и имя в консоль).
        Создать класс Орка, который наследуется от персонажа, у которого
        есть оружие и который имеет метод - удара.
        Создать класс Эльфа, котоырй наследуется от персонажа, у 
        которого есть типа заклинаний и метод - создать заклинание.
*/

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    talk() {
        console.log(`Язык: ${this.language}, Имя: ${this.name}`);
    }
}

class Ork extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    blow() {
        console.log(`${this.race} по имени ${this.name} использует своё оружие ('${this.weapon}') и наносит удар!`);
    }
    talk() {
        console.log(`Я молучий и сильный орк и имя мне ${this.name}! Трепещите смертные!`);
    }
}

class Elf extends Character {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }
    createSpell() {
        console.log(`${this.race} по имени ${this.name} использует своё заклинание ('${this.spell}') и наносит удар!`);
    }
    talk() {
        console.log(`Бессмертные земли ещё подождут. Меня зовут ${this.name} - что значит 'Подруга Ветра'`);
    }
}

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
