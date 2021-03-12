module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    let arrOfSemi = bracketsConfig.map((i) => [`^\\${i[0]}.*\\${i[1]}$`]);
    let withoutSemi = bracketsConfig.map((i) => [`\\${i[0]}.*\\${i[1]}`]);
    let ecxeptionsSemi = bracketsConfig.map((i) => [`\\${i[0]}.{1}\\${i[1]}`]);
    let regexWithout = withoutSemi.map(i => new RegExp(withoutSemi[0], 'g'));
    let arrOfRegex = arrOfSemi.map(i => new RegExp(arrOfSemi[0], 'g'));
    let ecxeptionsRegex = ecxeptionsSemi.map(i => new RegExp(ecxeptionsSemi[0], 'g'))

    if (!ecxeptionsRegex.some(el => el.test(str))) {
        return true
    }
    else if (arrOfRegex.every(el => el.test(str))) {
        return true
    }
    return false


}

// let result = check('())(',  [['(', ')']])
// console.log(result)


