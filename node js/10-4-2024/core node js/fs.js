var http=require("http");
var fs=require("fs");
// write op
// *******************important module async opration*******************
// fs.writeFile
// fs.readFile
// fs.appendFile
// ------------------------
// *****************sync opration************************
// fs.write
// fs.readFileSync
// fs.appendFileSync
// fs.writeFileSync



fs.writeFile("test.txt","hello world!!",function(err){
    if(err){ 
    console.log("err");
    }
    else{
    console.log("write op donw!!");
    }


})
// read file op
fs.readFile("test.txt",function(err,data){
    if(err){
        console.log("error occured")
    }
    else{
        console.log(data.toString());
    }
})
console.log("last line");
