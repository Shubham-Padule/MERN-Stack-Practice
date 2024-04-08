var http=require("http");
var stud=require("./myfile.js");

http.createServer(function(req,res){

    if (req.method=="GET" && req.url=="/students") {
        res.write("get method");
      var arr=stud.getallstudents();

        var result=JSON.stringify(arr);
        
        res.write(result);
        res.end();
    } 
    else if( req.method=="POST" && req.url=="/newstudent"){ 
       
        res.write("post method");
        res.end();

        
    }
    
}).listen (3000,function(){
    console.log("server is running on port 3000");
})