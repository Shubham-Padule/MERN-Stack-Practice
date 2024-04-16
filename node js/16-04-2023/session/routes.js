// routes.js

// Require necessary modules
var express = require('express');
var router = express.Router();

// Define route for serving index.html
router.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Define route for retrieving all students
router.get("/students", function(req, res) {
    var arr = stud.getAllStudents();
    var jObj = JSON.stringify(arr);
    res.send(jObj);
});

// Define route for retrieving a student by roll number using request parameters
router.get("/student/:rno", function(req, res) {
    var rollno = req.params.rno;
    var obj = stud.getStudent(rollno);
    res.json(obj);
});

// Define route for retrieving a student by roll number using query parameters
router.get("/student", function(req, res) {
    var rollno = req.query.rno;
    var obj = stud.getStudent(rollno);
    res.json(obj);
});

// Define route for adding a new student
router.post("/newStudent", function(req, res) {
    var rollno = req.body.rno;
    var str = req.body.name;
    res.send(rollno + str);
});

// Define route for updating a student's marks by roll number
router.put("/upStudent/:rno", function(req, res) {
    var rollno = req.params.rno;
    var mks = req.body.marks;
    var out = stud.upStudent(rollno, mks);
    if (out == true) {
        res.send("Record updated!!");
    } else {
        res.send("Record not found!!");
    }
});

// Define routes for handling cookies
router.post("/newCookie", function(req, res) {
    var name = req.body.cookieName;
    var val = req.body.cookieValue;
    res.cookie(name, val, { "maxAge": 10 * 60 * 1000 });
    res.send("Cookie created!!");
});

router.get("/getCookie/:name", function(req, res) {
    var str = req.params.name;
    var out = req.cookies[str];
    res.send(out);
});

router.delete("/delCookie/:name", function(req, res) {
    res.clearCookie(req.params.name);
    res.send("Cookie removed!!");
});

// Export router
module.exports = router;
