module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    let arrOfSemi = bracketsConfig.map((i) => [`^\\${i[0]}.*\\${i[1]}$`]);
    let arrOfRegex = arrOfSemi.map(i => new RegExp(arrOfSemi[0], 'g'));
    return arrOfRegex.every(el => el.test(str));

}





