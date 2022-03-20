

const mongoose = require("mongoose");


//Student :- has fields like roll id, current batch, createdAt, updatedAt


const studentSchema = new mongoose.Schema({

    rollId:{type:String , required:true},
    currentBatch:{type:String , required:true},
    userId:{type:mongoose.Schema.Types.ObjectId , ref:"user",required:true},
    // batchId:{type:mongoose.Schema.Types.ObjectId , ref:"batch",required:false},


},
{
    versionKey:false,
    timestamps:true,
});

const Student = mongoose.model("student",studentSchema);

module.exports = Student;