const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
     name:String,
    contact:Number,
    address:String,
    email:String,
    password:String
})

module.exports = mongoose.model("userLogin",UserSchema)