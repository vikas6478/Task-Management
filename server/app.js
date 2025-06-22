const express = require("express");
const app = express();
const UserRoute = require('./routes/userRoute');
const ClientRoute = require("./routes/clientRoute")
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

require("dotenv").config();

const Port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB CONNECTED!!");
})

app.use(cors())
app.use(express.json())

app.use("/user",UserRoute)
app.use("/client",ClientRoute)

app.listen(Port,()=>{
    console.log(`server on ${Port}`)
})