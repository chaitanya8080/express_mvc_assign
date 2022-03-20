

const mongoose = require("mongoose");

//date_of_evaluation   instructor    batch_id 

const evaluationSchema = new mongoose.Schema({

    dateOfEvaluation : {type:Date , required:true},
    instructor:{type:String , required:true},
    batchId:{type:mongoose.Schema.Types.ObjectId , ref:"batch",required:true},

},
{
    versionKey:false,
    timestamps:true,
});

const Evaluation = mongoose.model("evaluation",evaluationSchema);

module.exports = Evaluation;