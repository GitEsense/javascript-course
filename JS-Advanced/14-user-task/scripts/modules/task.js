'use strict';
export class Task {
    #wrapper = document.querySelector('.wrapper');
    constructor(message) {
        this.message = message;
    }
    run() {
        // console.log(this.message);
        this.message.split('').forEach((char, i) => {
            setTimeout(() => {
                this.#wrapper.innerHTML += char;
            }, i * 100);
        });
    }
}
