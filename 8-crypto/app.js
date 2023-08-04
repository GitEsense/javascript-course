//  Домашнее задание - Массивы
function crypto(password) {
    const strArray = password.split('');
    const crypt1 = strArray.splice(4);
    strArray.reverse();
    crypt1.reverse();
    for (let i = 1; i < crypt1.length; i++) {
        crypt1.push(crypt1[i]);
        crypt1.splice(i, 1);
    }
    return strArray.concat(crypt1).join('');
}
function check(str1, password) {
    return password === crypto(str1);
}

console.log(crypto('password')); //  ssapdorw
console.log(check('ssapdorw', 'password')); //  true
console.log(check('ssapdorw', 'not')); // false
