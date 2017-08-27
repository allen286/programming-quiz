/**
 * str2int 模拟parseInt函数，目前只支持10进制，TODO:parseInt(string, radix)，支持指定进制参数radix
 * @param  str 
 * @return int number or NaN
 */

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
    if (!/[0-9]/.test(str[0])) return NaN;

    let index, result = 0;
    for (let i = 1; i < str.length; i++) {
        if (!/[0-9]/.test(str[i])) {
            index = i;
            break;
        }
    }

    str = str.slice(0, index); // 全是数字时index值为undefined，即从头截取到尾

    for (let i = 0; i < str.length; i++) {
        result += numMap[str[i]] * Math.pow(10, str.length - i - 1); // 题目允许使用乘法运算及幂函数吗？
    }

    return result;
}

// 测试
let test = ['123fdvcx', '0342er', '.2', '666', '2', '0', 0.2, 2343, 'wweqrw', [], {}, true];
console.log(test.map(str => str2int(str)));
