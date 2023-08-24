`use strict`;
const page = {
    panel: document.querySelector('.panel'),
    notification: document.querySelector('.notification'),
    inputs: {
        num1: document.querySelector('[name="num1"]'),
        num2: document.querySelector('[name="num2"]'),
    },
};
function submitForm(event) {
    const action = event.target.innerText;
    const elements = [page.inputs.num1, page.inputs.num2];
    const data = validateAndGetInputData(elements);
    if (!data) {
        return (page.panel.innerText = 'Не введены все числа');
    }
    const result = calculate(data[0], data[1], action);
    resetInputs(elements);
    page.panel.innerText = `${data[0]} ${action} ${data[1]} = ${result}`;
    page.notification.classList.remove('notification_hidden');
}

function resetInputs(elements) {
    for (const elem of elements) {
        elem.value = '';
    }
}

function validateAndGetInputData(elements) {
    let isValid = true;
    const result = [];
    for (const elem of elements) {
        const elemValue = elem.value;
        elem.classList.remove('error');
        if (!elemValue) {
            page.notification.classList.add('notification_hidden');
            elem.classList.add('error');
            isValid = false;
        }
        result.push(Number(elemValue));
    }

    if (!isValid) {
        return false;
    }
    return result;
}

function calculate(a, b, char) {
    switch (char) {
        case '+': {
            return a + b;
        }
        case '-': {
            return a - b;
        }
        case '/': {
            if (b === 0) {
                return 'Нельзя делить на ноль';
            }
            return (a / b).toFixed(2);
        }
        case '*': {
            return a * b.toFixed(2);
        }
    }
}
