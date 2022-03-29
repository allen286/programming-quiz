

function myInstanceof(l, r) {
  while (true) {
    if (l === null) {
      return false
    }
    if (l.__proto__ === r.prototype) {
      return true
    }
    l = l.__proto__
  }
}
