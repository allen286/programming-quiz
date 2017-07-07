/**
 * 交换两个变量的值，不依靠第三方变量
 * 性能比较: 借助第三方变量temp > 加法运算 ≈ 位运算(异或) > 数组(对象)缓存 >> 数组解构赋值
 */

var a = 1,
    b = 2;

// 方式1：解构赋值
// 注：相当于重新声明了两个变量并赋值，let声明时会报错"Identifier 'a' has already been declared"
[a, b] = [b, a];
console.log('a:', a, ' b:', b); // a: 2  b: 1

// 方式2：通过加减法，仅适用于数值
a = a + b;
b = a - b;
a = a - b;
console.log('a:', a, ' b:', b); // a: 2  b: 1

// 方式3：位运算符，仅适用于数字
a ^= b; // 1^2=3
b ^= a; // 3^2=1
a ^= b; // 1^3=2
console.log('a:', a, ' b:', b); // a: 2  b: 1

// 方式4：数组，本质上还是用了第三方变量。。
a = [a, b]
b = a[0];
a = a[1];
// 可以简化为a = [b, b = a][0];
console.log('a:', a, ' b:', b); // a: 2  b: 1

// 方式5：对象，本质上还是用了第三方变量。。
a = {
    a: a,
    b: b
}
b = a.a;
a = a.b;
console.log('a:', a, ' b:', b); // a: 2  b: 1
