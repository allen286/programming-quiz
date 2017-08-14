/**
 * 腾讯的一道面试题，实现大整数相加算法，两个数用字符串模拟，例如add("9999999999", "1")
 * @param {string} a 
 * @param {string} b
 * @return {string}
 */

function add(a, b) {
  // 替换掉字符串开头的0以及字符串中间的空格，如0009 99->999
  a = a.replace(/^0+|\s+/g, '');
  b = b.replace(/^0+|\s+/g, '');

  let result = [];
  let count = 0;
  let tmp = 0;

  for (let i = 1; i <= a.length || i <= b.length || count; i++) {
    // 利用~~取整，~~undefined===0
    temp = ~~a[a.length - i] + ~~b[b.length - i] + count;
    count = temp >= 10;
    result.unshift(temp % 10);
  }

  return result.join('');
}

// 测试用例
console.log(add("0027899", "1"));
console.log(add("3333333333333333", "7766554433221100"));
console.log(add('99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '1'));
