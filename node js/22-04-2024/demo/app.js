var express=require('express');
var app=express();

var router=require("./routes/routes.js");
app.use("/userApp",router);

var cors=require('cors');
app.use(cors());

//static resources
app.use(express.static("public"));
//app.use("/images",express.static(__dirname+"/images"));
//routes

app.listen(3000,function(){
    console.log("server is listening at port 3000");
})