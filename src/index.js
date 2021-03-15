//module.exports =
    function check(str, bracketsConfig) {
    let newStr = str;
    let preparedForRegex =
    (typeof parseInt(bracketsConfig[0][0]) === 'number')
    ? bracketsConfig.map((i) => i[0] + i[1])
    : bracketsConfig.map((i) => `\\${i[0]}\\${i[1]}`)
    let possibleAmount = (str.length / 2) + 2;
    let arrOfRegex = preparedForRegex.map((i) => new RegExp(i, 'g'));
        while (possibleAmount > 0) {

            for(let i = 0; i < arrOfRegex.length; i++){
                        if(i === arrOfRegex.length -1 ){possibleAmount--}
                        newStr = newStr.replace(arrOfRegex[i], '');


                    }
        }
        // if (arrOfRegex.some(el => el.test(newStr))) {
        //     for(let i = 0; i < arrOfRegex.length; i++){
        //         newStr = newStr.replace(arrOfRegex[i], '')
        //     }
        //     return check(newStr, bracketsConfig)
        // }
        if(newStr === ''){
            return true
        }
        return false
    }

let res = check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']])
console.log(res)


