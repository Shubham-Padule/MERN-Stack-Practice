const mongoose = require("mongoose");
const StudentSchema1 = new mongoose.Schema({
    rollno: {  
        type: Number,
        default: 0  
      },
    name: {
        type: String
    },
    marks:{
        type:Number
    },
    url:{
        type:String
    }
 
});
const Student = mongoose.model("studData", StudentSchema1,"student");
module.exports = Student;