//routes.js
var express = require("express");
var router = express.Router();
let user = require("../modules/user.js");
var bodyParser = require("body-parser");

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//db connectivity using mongoose
//mongoose.Promise = global.Promise;
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/nodedemo";
db.user = user;
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


const User = db.user;
router.get("/home", function (req, res) {
  res.send("its home page!!");
});
//new user add to deta base 
router.post("/newUser", async function (req, res) {
  var data = req.body;
  console.log(data);
  var obj = new User(data);

  var out = await User.insertMany(obj);
  res.send(out);
});
/// show all data base
router.get("/allUsers", async function (req, res) {
  var out = await User.find();
  var obj={msg:"data found",data:out};
  res.json(obj);
});

// show all data base by id

router.get("/user/:id", async function (req, res) {
  let uid = req.params.id;
  var out = await User.findOne({ uId: uid });
  if(out){
    var obj={msg:"data found",data:out};}
  else{
    var obj={msg:"data not found",data:out};
  }
  res.json(obj);
});

router.get("/user", async function (req, res) {
  let id = req.query.id;
  var out = await User.findOne({ uId: id });
  res.json(out);
});


//update query
router.put("/upUser/:id", async function (req, res) {
  let id = req.params.id;
  var city = req.body.uCity;
  var name = req.body.uName;
  var out = await User.findOneAndUpdate(
    { uId: id },
    { uCity: city, uName: name }
  );
  res.json(out);
});

//deletequrey
router.delete("/delUser/:id", async function (req, res) {
  let id = req.params.id;
  var out = await User.deleteOne({ uId: id });
  res.json(out);
})

// 22-04-2024
 //pagination routes 
 router.get("/users/:limit/:skip", async function (req, res) {
  var lm=req.params.limit;
  var sk=req.params.skip;
  var out = await User.find().limit(lm).skip(sk);
   res.json(out);
 })

 router.get("/users/:name", async function (req, res) {
  var str = req.params.name;
if (str == "name1"){
  var out=await User.find().sort({uName:1});
}else if(str=="name     2"){
  var out = await User.find().sort({uName:-1});
  
}

   res.json(out);
}   
 )


 

module.exports = router;
         