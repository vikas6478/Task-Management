import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/Api';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import "../css/registration.css"

const Registration = () => {

    const [input, setInput] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        let api = `${BASE_URL}/registration`;
        const res = await axios.post(api,input);
        console.log(res.data);
         toast.success(res.data, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        });
    }

    const login =()=>{
        navigate("/login")
    }
  return (
   <>
       <div className="registration-container">

      <div className="right-form">
        <Form className='form-box'>

          <Form.Group className="mb-3">
            <Form.Label>FULL NAME</Form.Label>
            <Form.Control type="text" placeholder="Name" name='name' onChange={handleInput}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>CONTACT NO.</Form.Label>
            <Form.Control type="text" placeholder="Contact no." name='contact' onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ADDRESS</Form.Label>
            <Form.Control type="text" placeholder="Address" name='address' onChange={handleInput}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name='email' onChange={handleInput}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={handleInput}/>
          </Form.Group>

          <button onClick={handleSubmit}>Submit</button>

          <h1 style={{ fontSize: "16px", marginTop: "20px" }}>
            If you already have an account <br />
            <span onClick={login} style={{ cursor: 'pointer', fontFamily: 'initial' }} className='log'>
              Login now!
            </span>
          </h1>

        </Form>
         </div>
    </div>
    <ToastContainer />
   </>
  )
}

export default Registration
