const mongoose = require("mongoose")

const ClientSchma = new mongoose.Schema({
    name:String,
    email:String,
    designation:String,
    password:String
})
module.exports = mongoose.model("client",ClientSchma)