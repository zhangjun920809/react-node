
//console.log(arguments.callee+"")
//node.js中全局变量global. js文件中的全局变量和函数都会成为globle的属性。左右类似网页中的windows

//console.log(global)
/*  结果如下：
Object [global] {
    global: [Circular],
        clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
}
*/

console.log(arguments.callee+"")
/*
arguments：js中封装封装实参的参数，只存在于方法中。
node.js在执行模块中的代码时，会把整个文件中的代码放进：
function (exports, require, module, __filename, __dirname) {}函数中
    exports:导出需要对外暴露的变量或函数。是module对象的属性
        exports.name="nimei";//yong.js中导出name变量
        module.exports.name="nimei"; //推荐使用这种方式导出
    require:引入模块
        var yong = require("./yong.js");//test.js中引入yong.js模块
        console.log(yong.name) //test.js可以获取yong.js 中导出的变量
    modele:模块本身
    __filename:当前模块位置的全路径
    __dirname:当前模块所在目录的全路径

 */
var yong = require("./yong.js");
console.log(yong.name)
