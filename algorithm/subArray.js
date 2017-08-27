/**
 * 一个数组有 N 个元素，求连续子数组的最大和。 例如：[-1,2,1]，和最大的连续子数组[2,1]和为3 
 * @param {array} 输入数组
 * @return {number} 输出连续子数组最大和
 */

/**解法一：动态规划
 * 设sum[i]为以第i个元素结尾且和最大的连续子数组。假设对于元素i，所有以它前面的元素结尾的子数组的长度都已经求得，那么sum[i] = max(sum[i-1] + a[i], a[i])；
 * 可以通过判断sum[i-1] + a[i]是否大于a[i]来做选择，而这实际上等价于判断sum[i-1]是否大于0;
 * 每次运算只需要前一次的结果，因此并不需要像普通的动态规划那样保留之前所有的计算结果，只需要保留上一次的即可
 */
function maxArrSum(arr) {

  var result = arr[0];
  var sum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (sum > 0) {
      sum += arr[i]
    } else {
      sum = arr[i];
    }

    if (sum > result) {
      result = sum;
    }
  }

  return result;
}