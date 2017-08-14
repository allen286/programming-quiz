/**
 * 腾讯的一道面试题，实现大整数相加算法，两个数用字符串模拟，例如add("9999999999", "1")
 * @param {string} a 
 * @param {string} b
 * @return {string}
 */

function add(a, b) {
  // 替换掉字符串开头的0以及字符串中间的空格，如00099->99
  a = a.replace(/^0+|\s+/g, '');
  b = b.replace(/^0+|\s+/g, '');

  // 保证a是长度较大的那个字符串
  if (a.length < b.length) {
    [a, b] = [b, a]
  }

  let result = [];
  let count = 0;

  for (let i = 1; i <= a.length; i++) {
    // 利用~~取整，其中b[负数]===undefined, ~~undefined===0
    let temp = ~~a[a.length - i] + ~~b[b.length - i < 0] + count;

    temp >= 10 ? [temp, count] = [temp - 10, 1] : count = 0;
    result.push(temp);
  }
  // count>0时才put进去，避免出现多余的0
  count && result.push(count);

  return result.reverse().join('');
}

// 测试用例
console.log(add("0027899", "1"));
console.log(add("33333333333", "111111111111111"));
console.log(add('99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '1'));
