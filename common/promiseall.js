function myPromiseAll(ps = []) {
  const arr = []
  let count = 0
  return new Promise((resolve, reject) => {
    ps.forEach((item, i) => {
      Promise.resolve(item)
        .then((res) => {
          arr[i] = res
          count += 1
          if (count === ps.length) {
            resolve(arr)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  })
}

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

// 所有 Promsie 都成功
myPromiseAll([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

// 一个 Promsie 失败
myPromiseAll([p1, p2, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
