`use strict`;
function submitForm(e) {
    const numbers = [];
    document
        .querySelectorAll('.input')
        .forEach((el) => numbers.push(Number(el.value)));

    const action = e.target.innerText;
    const isError = isValid(...numbers);
    if (isError) {
        return (document.querySelector('.panel').innerText = isError);
    }

    const result = calculate(...numbers, action);
    document.querySelector('.panel').innerText = result;
    document.querySelectorAll('.input').forEach((el) => (el.value = ''));
    document
        .querySelector('.notification')
        .classList.toggle('notification_hidden');
}

function isValid(a, b) {
    let message;
    if (!a || !b) {
        message = 'Не введены все числа';
    } else if (isNaN(a) || isNaN(b)) {
        message = 'Вводите только числа';
    }
    return message;
}

function calculate(a, b, char) {
    let result = 0;
    switch (char) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        default:
            break;
    }
    return result;
}
