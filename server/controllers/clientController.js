const ClientModel = require("../models/clientModel");
const TaskModel = require("../models/taskModel")
const bcrypt = require("bcrypt");

const userLogin = async(req,res) =>{
    const  { email,password } = req.body;
    try {
        const Client = await ClientModel.findOne({email:email});

        if(!Client){
            res.status(400).send({msg:"invalid Email_Id!!"})
        }
        if(Client.password !== password){
            res.status(400).send({msg:"invalid Password!!"})
        }
        
            res.status(200).send({msg:"client login successfully!!",Client})

    } catch (error) {
        console.log(error);
    }
    
}

const myTaskList=async(req, res)=>{
  const { id } = req.query;
  console.log(id);
  console.log(req.query)
   try {
        const Task= await TaskModel.find({userid:id});
        console.log(Task);
        res.status(200).send(Task);
   } catch (error) {
     console.log(error);
   }
 }

 const taskComplete=async(req, res)=>{
  const {id}= req.query;

  try {
         const Task= await TaskModel.findByIdAndUpdate(id, {taskstatus:true});
         res.status(201).send({Task:Task, msg:"Succesfully Updated"});
  } catch (error) {
     console.log(error);
  }
}

// const PassReset = async (req, res) => {
//   const { userid, oldpassword, newpassword, repassword } = req.body;
//   console.log(req.body);

//   try {
//     const client = await ClientModel.findById(userid);

//     if (!client) {
//       return res.status(404).send("User not found");
//     }

    
//     if (client.password !== oldpassword) {
//       return res.status(400).send("Old password does not match");
//     }

//     if (newpassword !== repassword) {
//       return res.status(400).send("New passwords do not match");
//     }

    
//     await ClientModel.findByIdAndUpdate(userid, { password: newpassword });

//     return res.status(200).send("Password updated successfully!");
//   } catch (error) {
//     console.error("Error in PassReset:", error);
//     return res.status(500).send("Internal Server Error");
//   }
// };

const PassReset = async (req, res) => {
  const { userid, oldpassword, newpassword, repassword } = req.body;
  console.log("Request Body:", req.body);

  try {
    const client = await ClientModel.findById(userid);
    if (!client) {
      console.log("User not found");
      return res.status(404).send("User not found");
    }

    console.log("Password in DB:", client.password);      // 👈 Yeh dekho kya aa raha
    console.log("Old Password entered:", oldpassword);    // 👈 Yeh bhi dekho

    if (client.password !== oldpassword) {
      console.log("Old password does not match");
      return res.status(400).send("Old password does not match");
    }

    if (newpassword !== repassword) {
      console.log("New password mismatch");
      return res.status(400).send("New passwords do not match");
    }

    await ClientModel.findByIdAndUpdate(userid, { password: newpassword });

    res.status(200).send("Password updated successfully!");
  } catch (error) {
    console.error("Error in PassReset:", error);
    res.status(500).send("Internal Server Error");
  }
};




module.exports={
    userLogin,
    myTaskList,
    taskComplete,
    PassReset

}