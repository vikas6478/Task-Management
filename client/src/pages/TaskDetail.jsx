import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from '../config/Api';
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Pagination from 'react-bootstrap/Pagination';
import "../css/taskdetail.css"


const TaskDetail=()=>{
    const [mydata, setMydata] = useState([]);
     const [currentPage, setCurrentPage] = useState(1); //1
     const itemsPerPage = 3; // 👈 3 tasks per page // 2

    const loadData=async()=>{
          let api=`${BASE_URL}/taskdetail`
          try {
              const response= await axios.get(api);
              console.log(response.data);
              setMydata(response.data);
          } catch (error) {
             console.log(error);
          }
    }

    useEffect(()=>{
        loadData();
    }, [])

   const changeTaskStatus=async(id)=>{
    let api=`${BASE_URL}/changetaskstatus/?id=${id}`;
    try {
          const response = await axios.get(api);
          console.log(response);
    } catch (error) {
        console.log(error);
    }

    loadData();
   }

  const myDel=async(id)=>{
  let api=`${BASE_URL}/taskdelete`;
  const res= await axios.post(api,{userid:id})
  console.log(res.data)
  loadData();
 }

   // 🔥 Pagination logic
  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = mydata.slice(startIdx, endIdx);

  let no = startIdx + 1;

    
    const ans = paginatedData.map((key) => (
    <Card key={key._id} className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            {key.taskstatus ? (
              <IoIosCheckmarkCircleOutline color="green" size={25} />
            ) : (
              <IoIosCloseCircleOutline color="red" size={25} />
            )}
          </div>
          <div>#{no++}</div>
        </div>
        <p><strong>Name:</strong> {key.userid.name}</p>
        <p><strong>Email:</strong> {key.userid.email}</p>
        <p><strong>Title:</strong> {key.title}</p>
        <p><strong>Description:</strong> {key.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
  {key.taskstatus ? (
    <Button
      variant="outline-primary"
      size="sm"
      onClick={() => changeTaskStatus(key._id)}
      className="action-btn reassign"
    >
      🔁 Reassign Task
    </Button>
  ) : (
    <Button
      variant="outline-danger"
      size="sm"
      className="action-btn pending"
      disabled
    >
      ⏳ Awaiting Completion
    </Button>
  )}

  <div onClick={() => myDel(key._id)} style={{ cursor: "pointer" }} className="deletekey">
    <MdDelete size={20} />
  </div>
</div>

      </Card.Body>
    </Card>
  ));


    let paginationItems  = [];
for (let number = 1; number <= totalPages; number++) {
  paginationItems.push(
    <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
      {number}
    </Pagination.Item>,
  );
}

    return(
        <>
     <h2>Task Detail List</h2>
      {ans}
  

  {/* 👇 Pagination Control */}
      <Pagination className="justify-content-center">{paginationItems}</Pagination>
        </>
    )
}

export default TaskDetail;  