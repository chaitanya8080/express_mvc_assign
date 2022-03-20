

const mongoose = require("mongoose");


const connect = ()=> {
    return mongoose.connect("mongodb+srv://sbi:sbi123@cluster0.3uome.mongodb.net/bank?retryWrites=true&w=majority");
}

module.exports = connect;