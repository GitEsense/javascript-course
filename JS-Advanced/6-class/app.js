"use strict";

/*
    Title: Классы - домашнее задание
    Description: 
        Создайте класс Car у которого есть марка, модель и пробег (все 
            свойства приватные, задаются в конструкторе).
        -   Сделайте для него возможность менять пробег через get и set
        -   Добавьте метод info, который выводить в консоль марку, модели и пробег
*/

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

class Car {
  static #COUNTER = 0;
  #_brand;
  #_model;
  #_mileage;
  #_number;

  constructor(brand, model, mileage) {
    this.#_brand = brand;
    this.#_model = model;
    this.#mileage = mileage;
    Car.#COUNTER++;
    this.#_number = Car.#COUNTER;
  }

  get #mileage() {
    return this.#_mileage;
  }

  set #mileage(value) {
    this.#_mileage = value;
  }

  checkMileage(value) {
    return this.#mileage === value;
  }

  changeMileage(value) {
    try {
      if (this.checkMileage(value)) {
        throw `the values ​​are the same (current: ${
          this.#mileage
        }, new: ${value}). Mileage NOT changed`;
      }

      console.log(`mileage changed from ${this.#mileage} to ${value}`);
      this.#_mileage = value;
      return true;
    } catch (error) {
      console.error("Ошибка: " + error);
    }
  }
  info() {
    console.log(
      "-".repeat(24) + this.#_number.toString().padStart(2, 0) + "-".repeat(24)
    );
    console.log(
      `Марка: ${this.#_brand}, Модель: ${this.#_model}, Пробег: ${
        this.#mileage
      }\n`
    );
  }
  static counts() {
    return this.#COUNTER;
  }
}

async function generateAnswer() {
  const carMap = [];
  const brands = ["Audi", "BMW"];
  const models = await fetch("./data/models.json")
    .then((res) => res.json())
    .then((data) => data);

  for (let i = 0; i < getRandom(5, 15); i++) {
    const randomBrand = getRandom(0, brands.length) - 1;
    const brand = brands[randomBrand];
    const modelsArray = models[brand];
    const randomModel = getRandom(0, modelsArray.length - 1);
    const model = modelsArray[randomModel];

    carMap.push(new Car(brand, model, getRandom(100, 120)));
  }
  return carMap;
}
(async () => {
  const result = await generateAnswer();
  result.forEach((x) => {
    x.info();
    x.changeMileage(getRandom(100, 120));
  });
})();
