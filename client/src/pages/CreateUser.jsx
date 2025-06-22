import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/Api';
import { useState } from 'react';
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
import "../css/createuser.css"

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");

   const handleSubmit=async(e)=>{
        e.preventDefault();
          let api=`${BASE_URL}/usercreation`;
        try {
             const response= await axios.post(api, {name:name, email:email, designation:designation})
             console.log(response);
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
  <div className="createuser-page">
    <div className="createuser-box">
      <h2>Create New User</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Designation</Form.Label>
          <Form.Select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option>--Select Designation--</option>
            <option>Programmer</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>DataBase Developer</option>
            <option>Analyst</option>
            <option>Coder</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  </div>
 <ToastContainer/>
  
  </>
);


}

export default CreateUser;