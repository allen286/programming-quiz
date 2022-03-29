
const url = 'http://sample.com/?a=1&b=2&c=xx&d=2&a=101#hash'

function getUrlParams(url) {
  let arr = url.split('?').pop().split('#').shift().split('&')
  const obj = {}
  arr.forEach((ele) => {
    const [k, v] = ele.split('=')
    if (obj[k] !== undefined) {
      obj[k] = [obj[k]].concat([v])
    } else {
      obj[k] = v
    }
  })
  return obj
}

console.log(getUrlParams(url))
