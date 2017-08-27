/**
 * 美团的一道面试题，求两个字符串的最长公共连续子串
 * @param {string} a 字符串a 
 * @param {strng} b  字符串b
 * @return {number} 最长公共子串的长度
 */
function commonStr(a, b) {
  // 保证a是较短的那个
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  if (b.indexOf(a) > -1) {
    return a.length;
  }

  let tempLength = 0;
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    let iCursor = i;
    for (let j = 0; j < b.length;) {
      if (a[iCursor] === b[j + (iCursor - i)]) {
        iCursor++;
        tempLength++;
        if (tempLength > maxLength) maxLength = tempLength;
        if (maxLength >= a.length - i) return maxLength;
      } else {
        tempLength = 0;
        iCursor = i;
        j++;
      }
    }

  }

  return maxLength;
}

// 测试
let [a, b] = ['aab', 'xyaaabz'];
console.log(commonStr(a, b));
