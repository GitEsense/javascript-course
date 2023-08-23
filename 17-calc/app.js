`use strict`;
const page = {
    panel: document.querySelector('.panel'),
    notification: document.querySelector('.notification'),
};
function submitForm(event) {
    event.preventDefault();
    const form = event.target.closest('form');
    const action = event.target.value;
    const fields = ['num1', 'num2'];
    const data = validateAndGetFormData(form, fields);
    if (!data) {
        return (page.panel.innerText = 'Не введены все числа');
    }
    const result = calculate(data[0], data[1], action);
    page.panel.innerText = `${data[0]} ${action} ${data[1]} = ${result}`;
    form.reset();
    page.notification.classList.remove('notification_hidden');
}

function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    let isValid = true;
    const result = [];
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if (!fieldValue) {
            page.notification.classList.add('notification_hidden');
            form[field].classList.add('error');
            isValid = false;
        }
        result.push(Number(fieldValue));
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
