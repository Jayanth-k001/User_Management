const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    dpt : {
        type: String,
        required: true,
    },
    hiredate : {
        type:String,
        required: true,
        
    },
    status : String
})

const monmodel = mongoose.model("users", schema);
module.exports=monmodel;