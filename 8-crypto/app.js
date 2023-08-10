//  Домашнее задание - Массивы
function transformPassword(password) {
    const strArray = password.split('');
    const firstHalfOfPassword = strArray.slice(0, strArray.length / 2);
    const secondHalfOfPassword = strArray.slice(strArray.length / 2);

    firstHalfOfPassword.reverse();
    secondHalfOfPassword.reverse();
    for (let i = 1; i < secondHalfOfPassword.length; i++) {
        secondHalfOfPassword.push(secondHalfOfPassword[i]);
        secondHalfOfPassword.splice(i, 1);
    }
    return firstHalfOfPassword.concat(secondHalfOfPassword).join('');
}
function checkPassword(str1, password) {
    return password === transformPassword(str1);
}

console.log(transformPassword('password')); //  ssapdorw
console.log(checkPassword('ssapdorw', 'password')); //  true
console.log(checkPassword('ssapdorw', 'not')); // false
