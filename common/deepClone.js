/**
 * 深拷贝
 */

// 法一：递归
// 缺陷：1、对象方法没拷贝， 指向同一个函数；2、存在循环引用的问题
const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;

    let result = obj.constructor === Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
        }
    }
    return result;
}

// 法二：利用JSON
// 缺陷：原型链会丢失
const jsonClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

// 兼容版本，JSON加递归(ie8以下不支持window.JSON)
const cloneObj = (obj) => {
    let result = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object' || obj === null) {
        result = obj;
    } else if (window.JSON) {
        result = JSON.parse(JSON.stringify(obj));
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = typeof obj[key] === 'object' ? cloneObj(obj[key]) : obj[key];
            }
        }
    }
    return result;
};
