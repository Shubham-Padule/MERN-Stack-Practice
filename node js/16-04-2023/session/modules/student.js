// modules/student.js

// Sample student data (replace with your actual student data)
var students = [
    { rollno: 1, name: "John Doe", marks: 85 },
    { rollno: 2, name: "Jane Smith", marks: 92 },
    { rollno: 3, name: "Alice Johnson", marks: 78 }
];

// Function to retrieve all students
function getAllStudents() {
    return students;
}

// Function to retrieve a student by roll number
function getStudent(rollno) {
    return students.find(student => student.rollno == rollno);
}

// Function to update a student's marks by roll number
function upStudent(rollno, marks) {
    var student = students.find(student => student.rollno == rollno);
    if (student) {
        student.marks = marks;
        return true; // Record updated successfully
    } else {
        return false; // Record not found
    }
}

// Export functions
module.exports = {
    getAllStudents,
    getStudent,
    upStudent
};
