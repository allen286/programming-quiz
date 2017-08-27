/**
 * diff比较两个值是否相同。例如{a:[1,2]}和{a:[2,1]}视为相同
 * @param {*} a 
 * @param {*} b 
 * @return {boolean} true or false
 */
function diff(a, b) {
  if ((typeof a) !== (typeof b)) return false;

  // 只支持比较纯数字或纯字符串数组
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    return a.every((item, index) => item === b[index]);
  }

  // 函数的话忽略，不做比较
  if (typeof a === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    return Object.keys(a).every(key => diff(a[key], b[key]));

  }

  // 基本类型值的情况
  return a === b;
}