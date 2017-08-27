// 网易内推面试题,去抖和节流
// 去抖，停止触发后才执行，避免频繁执行影响性能
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 节流。以指定时间间隔来执行，以节省性能
// 1、简化版本
function throttle1(fn, time) {
  let startTime = new Date()

  return function (...args) {
    let currTime = new Date()
    if (currTime - startTime > time) {
      fn.apply(this, args)
      startTime = currTime
    }
  }
}

// 2、结合debounce版本
function throttle2(fn, delay, time) {
  let startTime = new Date();
  let timer;

  return function (...args) {
    let currTime = new Date()
    clearTimeout(timer)

    if (currTime - startTime > time) {
      fn.apply(this, args)
      startTime = currTime
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
}
