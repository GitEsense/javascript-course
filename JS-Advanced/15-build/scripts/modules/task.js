'use strict';
export class Task {
    #wrapper = document.querySelector('.wrapper');
    constructor(message) {
        this.message = message;
    }
    run() {
        this.#wrapper.innerHTML = '';
        // console.log(this.message);
        const charArray = this.message.split('');
        charArray.forEach((char, i) => {
            setTimeout(() => {
                this.#wrapper.innerHTML += char;
            }, i * 100);
        });
        setTimeout(() => {
            this.run();
        }, charArray.length * 100 + 2000);
    }
}
