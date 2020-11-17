
//同步方法操作文件,没有回调函数
//引入模块
/*var fs = require("fs");
//打开文件，返回一个代表文件的文件操作符，第二个参数代表操作类型 “w” "r"。有多个参数，一般只使用前两个
var co = fs.openSync("hello.txt","w")
//写入内容 返回写入内容字节长度。有多个参数，一般只使用前两个
var w = fs.writeSync(co,"nihaoa把")
//关闭资源
fs.close()
console.log(w);*/

//异步操作

//打开文件
/*fs.open("hello.txt","w",function (err,fd) {
    if (err) {
        console.log("错误")
    }
    //写入文件
    fs.write(fd,"你好吗",function (err,written) {
        if (err){
            console.log("写入时出现错误")
        }
        //关闭流
        fs.close(fd,function () {

        })
    })

})*/

var fs = require("fs");
/*
//异步
fs.writeFile("wirtefile.txt","wohenniub",function () {

})
//同步
fs.writeFileSync("wirtefile.txt","wohenniub",function () {

})*/


var fs = require("fs");
var ws = fs.createWriteStream("writestream.txt");

//监听流打开事件,流打开时执行。只执行一次
ws.once("open",function () {
    console.log("打开")
})
//监听流关闭事件，流关闭时执行，只执行一次
ws.once("close",function () {
    console.log("关闭")
})
//可以一直写
ws.write("wozuiniub")
ws.write("jingttianh")

//关闭流不要使用close  会造成写入数据丢失，要使用end() 方法
//ws.close()
ws.end()
