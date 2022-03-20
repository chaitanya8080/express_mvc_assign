const express = require("express");
// const res = require("express/lib/response");

const mongoose = require("mongoose");
const connect = require("./config/db")

const usersController = require("./controllers/user.controller");
const submissionController = require("./controllers/submission.controller");
const studentController = require("./controllers/students.controller");
const evalController = require("./controllers/eval.controller");
const batchController = require("./controllers/batch.controller");

const app = express();

app.use(express.json());

app.use("/users", usersController); 
app.use("/students", studentController); 
app.use("/submission", submissionController); 
app.use("/evaluation", evalController); 
app.use("/batch", batchController ); 



app.listen(1144, async()=>{

    try {
        await connect();
        console.log("listning to port 1144");

    } catch (error) {
        console.log(error);
    }
})