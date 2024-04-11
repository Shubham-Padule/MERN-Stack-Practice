// core Os, fs ,path
var os=require("os");
console.log("platform="+os.platform());
console.log("userinfo="+os.userInfo());
console.log("freemem="+os.freemem());
console.log("hostdir="+os.homedir());

var path=require("path");
var str="f:/bitcode/node js/10-4-2024/core node js/demo.js";
console.log("dirname="+path.dirname(str));
console.log("extention="+path.extname(str));
console.log("basename="+path.basename(str));