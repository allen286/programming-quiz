/**
 * str2int 模拟parseInt函数
 * @param  str 
 * @return int number or NaN
 */

function str2int(str) {
    if (typeof str === 'number') {
        let temp = str + '';
        if (temp.indexOf('.') === -1) {
            return str; // 整数时直接return，避免后面的循环，提高效率
        } else {
            str = temp;
        }
    }
    if (typeof str !== 'string') return NaN;

    let result = 0;
    let index = -1;
    for (let i = 0; i < str.length; i++) {
        if (!/[0-9]/.test(str[i])) {
            index = i;
            break;
        }
    }
    if (index === 0) return NaN;

    str = str.slice(0, index);
    const numMap = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '8': 8,
        '9': 9,
    };

    for (let i = 0; i < str.length; i++) {
        result += str[i] * Math.pow(10, str.length - i - 1)
    }

    return result;
}