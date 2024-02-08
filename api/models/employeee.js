const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    employeId:{
        type:String,
        required:true,
        unique:true
    },
    employeName:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    joiningDate:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    activeEmploye:{
        type:Boolean,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

const Employee = mongoose.model("Employee",employeSchema);

module.exports = Employee;