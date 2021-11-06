const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        // required:true,
    },
   mobile:{
        type:Number,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    }
})


const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;