const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    employeId:{
        type:String,
        required:true
    },
    employeName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance;