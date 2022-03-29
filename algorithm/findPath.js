
function findPath(obj = {}, targetValue) {
  const dfs = (obj = {}, targetValue) => {
    let res = [];
    Object.keys(obj).forEach((key) => {
      res.push(key);
      if (obj[key] && typeof obj[key] === 'object') {
        let temp = dfs(obj[key], targetValue);
        if (temp.length) {
          // 说明在子层中找到目标值，拼接key数组，return
          res = [...res, ...temp];
          return res;
        }
      } else if (obj[key] === targetValue) {
        // 当前层找到目标值，直接return，无需递归下一层
        return res;
      }
      res.pop();
    });
    return res;
  };
  return dfs(obj, targetValue);
}

const obj = {
  a: {
    a_1: {
      a_1_1: 'abc',
      a_1_2: 'efg',
    },
  },
  b: {
    b_1: 'xyz',
    b_2: '111',
  },
  c: '000',
};
const result = findPath(obj, 'xyz'); // ['b', 'b_1']
console.log('res: ', result);
