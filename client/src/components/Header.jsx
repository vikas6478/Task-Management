import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import BASE_URL from '../config/Api';
import axios from 'axios';
import "../css/header.css"
import "../css/modals.css"


const Header = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    let api = "https://task-management-aavb.onrender.com/client/userlogin";
    try {
      const response = await axios.post(api, {email,password});
      localStorage.setItem("clientname",response.data.Client.name)
      localStorage.setItem("clientemail",response.data.Client.email)
      localStorage.setItem("userid",response.data.Client._id)
      console.log(response)
      navigate("/clientdashboard");

    } catch (error) {
      console.log(error)
    }
  }



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "teal" }}>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="home">Home</Nav.Link> */}
            {/* <Nav.Link as={Link} to="registration">Registration</Nav.Link> */}
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          </Nav>

          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link onClick={handleShow}>
              <FaUserCircle size={26} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

           

            <Modal show={show} onHide={handleClose} className="dark-modal">
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>
      

        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
