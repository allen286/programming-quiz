/**
 * 之前搜狐实习面试时的一道题，考察函数式编程及函数柯里化
 * @param {*} fn 要被执行的函数
 * @param {*} times 执行次数
 * @param {*} interval 执行时间间隔/毫秒
 */

function curry(fn, times, interval) {
    return function () {
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

// 测试
const hello5 = curry(hello, 5, 1000);
hello5('hello world');

/**
 * 搜狐实习笔试的一道题，a(2)(3)返回5，a(4)(5)(6)返回15,完成函数a
 * 难点在于何时返回函数，何时返回数值
 * 只返回函数，利用改写函数的valueOf方法，模拟实现输出数值。注意typeof仍是function
 * @param {number}
 * @param {function} 
 */

// 初始版本
function a(x) {
    let sum = 0;

    function add(y) {
        sum = sum + y;
        return add;
    }
    add.valueOf = function valueOf(){
		return sum;
	};

    return add.call(null, x); 
}
console.log(a(4)(5)(6)); // { [Number: 15] valueOf: [Function: valueOf] }

// 拓展版本，支持多参数，如aPlus(1, 2, 3)(4, 5)(6)
function aPlus(...arg) {
    let sum = 0;

    function add(...arg) {
        sum = arg.reduce((prev, cur) => (prev + cur), sum);
        return add;
    }
    add.valueOf = function valueOf(){
		return sum;
	};

    return add.apply(null, arg); 
}

console.log(aPlus(1, 2, 3)(4, 5)(6)); // { [Number: 21] valueOf: [Function: valueOf] }
