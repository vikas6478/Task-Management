import React, { useState } from "react";
// import BASE_URL from "../config/Api.jsx";
import axios from "axios";
 import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "../css/resetpass.css"


const ResetPassword = () => {
  
const nav = useNavigate();
const [oldpassword,setOldpassword] = useState("")
const [newpassword,setNewpassword] = useState("")
const [repassword,setRepassword] = useState("")



  const handleSubmit=async()=>{
    let id = localStorage.getItem("userid")
    

    try {

      let api = "http://localhost:8080/client/passreset";

    let response = await axios.post(api, {userid:id, oldpassword:oldpassword, newpassword:newpassword,repassword:repassword})
    
    toast.success(response.data, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                });

    
    } catch (error) {
  
     toast.error(error.response.data, {
             position: 'top-center',
             autoClose: 2000,
           });
    }
    
  }

  return (
    <>
    <div className="pass-reset">
    <h2 className="resetpass-head">Password Reset</h2>
   
   <h1 className="oldpass">Enter Old Password <input type="password" value={oldpassword} onChange={(e)=>{setOldpassword(e.target.value)}} /></h1>
   <h1 className="newpass">Enter New Password <input type="password"  value={newpassword} onChange={(e)=>{setNewpassword(e.target.value)}} /></h1>
   <h1 className="renewpass">Re-Enter New Password <input type="password"  value={repassword} onChange={(e)=>{setRepassword(e.target.value)}} /></h1>

   <button onClick={handleSubmit}>Change Password</button>
   </div>
   <ToastContainer />
    </>
  );
};

export default ResetPassword;