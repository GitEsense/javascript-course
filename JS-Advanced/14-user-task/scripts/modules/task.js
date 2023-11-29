'use strict';
export class Task {
    #wrapper = document.querySelector('.wrapper');
    constructor(message) {
        this.message = message;
    }
    run() {
        this.message.split('').forEach((char, i) => {
            setTimeout(() => {
                this.#wrapper.innerHTML += char;
            }, i * 100);
        });
    }
}
