/**
 * 之前搜狐实习面试时的一道题，考察函数柯里化
 * @param {*} fn 要被执行的函数
 * @param {*} times 执行次数
 * @param {*} interval 执行时间间隔/毫秒
 */

function curry(fn, times, interval) {
    return function() {
        let args = [].slice.apply(arguments);
        let timer = setInterval(function () {
            if (times-- > 0) fn.apply(this, args);
            if (times === 0) clearInterval(timer);
        }, interval);
    }
}

function hello(a) {
    console.log(a);
}

const heleo5 = curry(hello, 5, 1000);
heleo5('hello world');
