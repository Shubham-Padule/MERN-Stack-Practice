const express = require('express');
const router = express.Router();

// Import the student module
const stud = require("../modules/students");

// Route to get all students
router.get("/", function(req, res) {
    const allStudents = stud.getAllStudents();
    res.json(allStudents);
});

// Route to get a specific student by roll number
router.get("/:rno", function(req, res) {
    const rollno = req.params.rno;
    const student = stud.getStudent(rollno);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});

// Route to add a new student
router.post("/", function(req, res) {
    const { name, rollno, marks } = req.body;
    if (!name || !rollno || !marks) {
        res.status(400).send("Name, roll number, and marks are required");
    } else {
        const success = stud.addStudent(name, rollno, marks);
        if (success) {
            res.send("Student added successfully");
        } else {
            res.status(500).send("Failed to add student");
        }
    }
});

// Route to update a student's marks by roll number
router.put("/:rno", function(req, res) {
    const rollno = req.params.rno;
    const { marks } = req.body;
    const success = stud.updateStudentMarks(rollno, marks);
    if (success) {
        res.send("Student marks updated successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

// Route to delete a student by roll number
router.delete("/:rno", function(req, res) {
    const rollno = req.params.rno;
    const success = stud.deleteStudent(rollno);
    if (success) {
        res.send("Student deleted successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

module.exports = router;
