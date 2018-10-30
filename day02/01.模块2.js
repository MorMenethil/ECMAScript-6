// 这是程序员使用require导入自己的js模块
const m1 = require('./00.模块1.js')
console.log(a)

//大家可以认为 global 就是浏览器中的window

// console.log (global)

// 默认在 node 中，每一个js文件中定义的方法，变量，都是属于模块作用域的；

let b = 20

// console.log(global.b)
global.b = b

global.say = function () { 
    console.log('这是挂载到全局的 say 方法')
 }

 console.log(global.b)
 global.say()
