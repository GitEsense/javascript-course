"use strict";

/*
    Title: Классы - домашнее задание
    Description: 
        Создайте класс Car у которого есть марка, модель и пробег (все 
            свойства приватные, задаются в конструкторе).
        -   Сделайте для него возможность менять пробег через get и set
        -   Добавьте метод info, который выводить в консоль марку, модели и пробег
*/

class Car {
  #_brand;
  #_model;
  #_mileage;

  constructor(brand, model, mileage) {
    this.#_brand = brand;
    this.#_model = model;
    this.#mileage = mileage;
  }

  get #mileage() {
    return this.#_mileage;
  }

  set #mileage(value) {
    this.#_mileage = value;
  }

  #checkMileage(value) {
    return this.#mileage === value;
  }

  changeMileage(value) {
    if (this.#checkMileage(value)) {
      console.error(
        `the values ​​are the same (current: ${
          this.#mileage
        }, new: ${value}). Mileage NOT changed`
      );
      return false;
    }

    console.log(`mileage changed from ${this.#mileage} to ${value}`);
    this.#_mileage = value;
    return true;
  }
  info() {
    console.log(
      `Марка: ${this.#_brand}, Модель: ${this.#_model}, Пробег: ${
        this.#mileage
      }`
    );
  }
}

const car1 = new Car("Audi", "A6", 10000);
car1.changeMileage(10000);
car1.changeMileage(2500);
car1.info();

const car2 = new Car("BMW", "X5", 1500);
car2.changeMileage(5000);
car2.changeMileage(5000);
car2.info();
