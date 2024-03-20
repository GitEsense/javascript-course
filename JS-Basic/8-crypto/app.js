/**
 * function encrypt / decrypt string password
 * @param {string} password - A string password
 */
function crypt(password) {
    if (!password || !password.length) {
        return NaN;
    }
    const splitedArray = password.split('');
    if (splitedArray.length < 8) {
        return false;
    }

    const middleIndex = Math.floor(splitedArray.length / 2);
    const firstHalf = splitedArray.slice(0, middleIndex).reverse();
    const secondHalf = splitedArray.slice(middleIndex).reverse();
    const length = secondHalf.length;
    [secondHalf[1], secondHalf[length - 2]] = [secondHalf[length - 2], secondHalf[1]];

    const encryptedPassword = firstHalf.concat(secondHalf);
    return encryptedPassword.join('');
}

function checkPassword(encryptedPassword, originalPassword) {
    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    return originalPassword === crypt(encryptedPassword);
}

function getRandomNumber(min = 0, max = 86) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

function getRandomPassword(length = 12) {
    const symbolArray = Array.from({ length: 87 }, (_, index) => String.fromCharCode(index + 33));
    console.log(symbolArray);
    const password = Array.from({ length }, () => symbolArray[getRandomNumber()]);
    return password.join('');
}

/*
    logging and test function with console
*/

const password = getRandomPassword();
const encrypted = crypt(password);

console.log('Пароль:', password);
console.log('Зашифрованный пароль:', encrypted);
console.log('Проверка пароля:', checkPassword(encrypted, password));

const password2 = getRandomPassword();
const encrypted2 = crypt(password2).substring(1);

console.log('Пароль:', password2);
console.log('Зашифрованный пароль:', encrypted2);
console.log('Проверка пароля:', checkPassword(encrypted2, getRandomPassword()));
