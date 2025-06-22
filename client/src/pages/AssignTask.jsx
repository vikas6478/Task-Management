import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import BASE_URL from '../config/Api';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "../css/assigntask.css";

const AssignTask = () => {
    
    const [mydata,setMydata] = useState([]);
    const [input, setInput] = useState({});
     const [show, setShow] = useState(false);
    const [userid, setUserid]= useState("");
   const handleClose = () => setShow(false);

   const handleShow = (uid) =>{
    setUserid(uid);
    setShow(true);
   } 

    const loadData = async() =>{

        let api = `${BASE_URL}/showuserdata`;

        try {
            const response = await axios.get(api)
            setMydata(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        loadData();
    },[])

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input)

    }

    const handleSubmit =async(e)=>{
        e.preventDefault();

         if (!userid) {
    alert("User ID nahi mila!");
    return;
  }

        let api = `${BASE_URL}/assigntask`;
        try {
            const response = await axios.post(api,{...input,userid})
            console.log(response.data)
            alert("successfully insert!!")
        } catch (error) {
            console.log(error)
        }

    }

    let sno=0;
    const ans = mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.designation}</td>
                <td> 
                <Button variant="outline-info"  onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
                </td>
            </tr>
            </>
        )
})

  return (
    <>
    <div className="assign-task-container">
       <h2> Assign Task To User</h2>
          <hr />
           <Table striped bordered hover className="assign-task-table">
      <thead>
        <tr>
          <th>Sno</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      
     </Table>
     </div>

        <Modal show={show} onHide={handleClose} className="dark-modal">
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text" name="title" onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control type="text" name="description" onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Completion Day</Form.Label>
        <Form.Control type="number" name="compday" onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  </Modal.Body>
        </Modal>
    </>
  )
}

export default AssignTask
