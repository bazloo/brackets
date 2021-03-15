module.exports = function check(str, bracketsConfig) {
    let newStr = str;
    let possibleAmountOfClosedBrackets = str.length / 2;
    let arrOfClosedBrackets = bracketsConfig.map(el => el[0] + el[1]);

    while (possibleAmountOfClosedBrackets > 0) {
        for (let i = 0; i < arrOfClosedBrackets.length; i++) {
            let pairOfBracketsToReplace = arrOfClosedBrackets[i];
            if (i === arrOfClosedBrackets.length - 1) {
                possibleAmountOfClosedBrackets--
            }
            newStr = newStr.replace(pairOfBracketsToReplace, '');
        }
    }

    if (newStr === '') {
        return true;
    }
    return false;
}




