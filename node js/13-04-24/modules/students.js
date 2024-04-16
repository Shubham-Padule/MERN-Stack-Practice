// myfile.js
var students = {
    arr: [
      {
        name: "sachin",
        rollno: 10,
        marks: 90,
      },
      {
        name: "sachin",
        rollno: 10,
        marks: 90,
      },
      {
        name: "sachin",
        rollno: 10,
        marks: 90,
      },
      {
        name: "sachin",
        rollno: 10,
        marks: 90,
      },
    ],
    getallstudents: function () {
      return this.arr;
    },
    getstudent: function (rno) {
      for (var i = 0; i < this.arr.length; i++) {
        if (rno == this.arr[i].rollno) {
          return this.arr[i];
        }
      }
    },
    updatestudent: function (rno, marks) {
      for (var i = 0; i < this.arr.length; i++) {
          if (rno == this.arr[i].rollno) {
              this.arr[i].marks = marks;
              return true;
          }
      }
      return false; // Return false if student with given rollno not found
    },
    deletestudent: function (rno) {
      for (var i = 0; i < this.arr.length; i++) {
        if (rno == this.arr[i].rollno) {
          this.arr.splice(i, 1); 
        }
      }
      return true; 
    }
  };
  
  module.exports = students;
  