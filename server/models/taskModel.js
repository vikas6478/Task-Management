const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    compday:Number,
    userid:{
        type: mongoose.Types.ObjectId,
         ref: "client"
        },
    taskstatus: { 
        type: Boolean, default: false }

})

module.exports= mongoose.model("task",taskSchema)