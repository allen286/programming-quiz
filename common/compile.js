/**
 * 实现模板字符串解析功能
 let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
 let data = {
   name: '姓名',
   age: 18
 }
 render(template, data); // 我是姓名，年龄18，性别undefined
 */

function render(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, p1) => {
    return data[p1]
  })
}
