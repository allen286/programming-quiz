
function myNew(fn, ...args) {
  // 构造函数原型prototype作为新创建对象的__proto__
  let obj = Object.create(fn.prototype)
  // 执行构造函数，将this指向创建的obj
  let res = fn.call(obj, ...args)
  if (typeof res === 'object' && res) {
    return res
  }
  return obj
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
