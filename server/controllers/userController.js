const UserModel = require("../models/userModel")
const ClientModel = require("../models/clientModel")
const TaskModel = require("../models/taskModel")
const userPassword = require("../middleware/randomPassword")
var nodemailer = require("nodemailer")

const Registration = async(req,res)=>{
   const { name, address, contact, email, password } = req.body;

   const UserData = await UserModel.create({
     name:name,
     address:address,
     contact:contact,
     email:email,
     password:password
   })

   res.send("create Account sucessfully!",{msg:"Data Save!",myData:UserData});
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.findOne({ email: email });
    if (!User) {
       res.status(401).send("Invalid Email",{ msg: "Invalid Email!!" });
    } 

    if (User.password !== password) {
       res.status(401).send("Invaild Password",{ msg: "Invalid Password!!" });
    }

    // Success - use 200 status
     res.status(200).send({ User77: User, msg: "Login Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" }); // Add this for unexpected errors
  }
};

const createUser=async(req, res)=>{
   const { name , email, designation }=req.body; 
   const UserPass=  userPassword();
   const userpss = await ClientModel.create({
    name:name,
    email:email,
    designation:designation,
    password:UserPass
   })
   res.send("create user sucessfully!",{msg:"data save",mydata:userpss})
  
   var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikasraghuvanshi64@gmail.com',
    pass: 'yunc hohv tozy kxog'
  }
});


 /*var mailOptions = {
      from: 'vikasraghuvanshi64@gmail.com',
      to: email,
      subject: 'Sending Email by Admin',
      text:`Welcome :  ${name}!\n
      Your designation : ${designation}\n
      Your Password : ${UserPass} \n You can Login With This Password ` 
    };*/

var mailOptions = {
  from: 'vikasraghuvanshi64@gmail.com',
  to: email,
  subject: 'Account Details',
  text: `Hello ${name},

Your account has been created successfully.

Designation: ${designation}  
Password: ${UserPass}

Use these details to log in. Kindly change your password after first login.

Regards,  
Admin`
};



     transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email Succ sent: ' + info.response);
        res.send(info.response);
      }
    });
}

const showUserData = async(req, res)=>{
  const User = await ClientModel.find();
  res.status(201).send(User);

}

const assignTask = async(req,res)=>{
  const { title, description, compday, userid } = req.body

  try {
      const Task = await TaskModel.create({
        title:title,
        description:description,
        compday:compday,
        userid:userid
  })
  res.status(201).send({msg:"User Task Succesfully Assign!"})
  } catch (error) {
    console.log(error)
  }

}

const taskDetail=async(req, res)=>{
  try {
     const Task= await TaskModel.find().populate("userid");
     res.status(200).send(Task);
  } catch (error) {
    console.log(error);
  }
}


const changeTaskStatus=async(req, res)=>{
    const {id} = req.query;
    console.log(req.query);
    try {
         const Task = await TaskModel.findByIdAndUpdate(id, {
          taskstatus:false
         })
         res.status(201).send("Succesfully updated!!!");
    } catch (error) {
       console.log(error);
    }
}

const TaskDelete =async(req, res)=>{
    const { userid } = req.body ;
    await TaskModel.findByIdAndDelete(userid);
    res.send("Data deleted!!!");
}


module.exports={
    Registration,
    login,
    createUser,
    showUserData,
    assignTask,
    taskDetail,
    changeTaskStatus,
    TaskDelete
}