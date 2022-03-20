

const mongoose = require("mongoose");


// firstName, lastName, gender, dateOfBirth
const userSchema = new mongoose.Schema({
     
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    gender:{type:String, required:true},
    dateOfBirth:{type:Number, required:true},
},
{
    versionKey:false,
    timestamps:true,
}
);

const User = mongoose.model("user", userSchema); 

module.exports = User;