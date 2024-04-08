var http=require("http");
const { listeners } = require("process");
http.createServer(function(req,res){

    if (req.method=="GET" && req.url=="/student") {
        res.write("get method");
        res.end();
    } 
    else if( req.method=="POST" && req.url=="/newstudent"){ 
       
        res.write("post method");
        res.end();

        
    }
    
}).listen (3000,function(){
    console.log("server is running on port 3000");
})