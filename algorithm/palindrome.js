/**
 * 判断字符串是否回文
 * @param  {string}  str 
 * @return {boolean}  true or false
 */

const palindrome = (str) => {
    if (typeof str !== 'string' || !str) return;

    return Array.from(str).reverse().join('') === str;
}

// 兼容版本
function palindrome2(str) {
    if (typeof str !== 'string' || !str) return;

    var result = true;
    for (var i = 0; i < str.length - 1 - i; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
            break;
        }
    }

    return result;
}
