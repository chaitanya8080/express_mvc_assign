




const mongoose = require("mongoose");


// submission  -- >  evaluation_id  student_id  marks

const submissionSchema = new mongoose.Schema({

    EvaluationId:{type:String , required:true},
    marks:{type:Number , required:true},
    studentId:{type:mongoose.Schema.Types.ObjectId , ref:"student",required:true},
},{
    versionKey:false,
    timestamps:true,
}
);

const Submission = mongoose.model("submission",submissionSchema); 

module.exports = Submission;