var express = require('express');
var router = express.Router();

let stud=require("./modules/student record.js");

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true})); 



router.post("/newstudent",function(req,res){
  var rollno=req.body.rno;
  res.send("rollno is="+rollno);
})

router.put("./updatestudent/:rno",function(req,res){
  var rollno=req.params.rno;
 var mks=req.body.marks;

 var out=stud.updatestudent(rollno,mks);
 if(out==true){
  res.send("student updated");
 }
})

app.delete("./deletestudent/:rno",function(req,res){
  var rollno=req.params.rno;
 var out=stud.deletestudent(rollno);
 if(out==true){
  res.send("student deleted"); 
 }
})






