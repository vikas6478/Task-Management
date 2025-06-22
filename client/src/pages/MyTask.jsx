import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from 'react-bootstrap/Pagination';
import "../css/mytask.css";

const MyTask = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const loadData = async () => {
    let api = `http://localhost:8080/client/mytask/?id=${localStorage.getItem("userid")}`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitTask = async (id) => {
    let api = `https://task-management-aavb.onrender.com/completetask/?id=${id}`;
    try {
      await axios.get(api);
    } catch (error) {
      console.log(error);
    }
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = mydata.slice(startIdx, endIdx);
  let no = startIdx + 1;

  return (
    <>
      <h2 className="mytask-title">Task List Assigned by Admin</h2>

      <div className="task-list">
        {paginatedData.map((task) => (
          <Card key={task._id} className="task-card">
            <Card.Body>
              <div className="task-header">
                <span className="task-id">#{no++}</span>
                <span className="task-date">⏱ {task.compday}</span>
              </div>
              <h5 className="maintitle">{task.title}</h5>
              <p>{task.description}</p>
              {task.taskstatus ? (
                <Button variant="success" disabled className="task-btn">
                  ✅ Task Submitted
                </Button>
              ) : (
                <Button onClick={() => submitTask(task._id)} className="task-btn">
                  🚀 Submit Task
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Pagination className="justify-content-center">{[...Array(totalPages).keys()].map(n =>
        <Pagination.Item key={n + 1} active={n + 1 === currentPage} onClick={() => setCurrentPage(n + 1)}>
          {n + 1}
        </Pagination.Item>)}
      </Pagination>
    </>
  );
};

export default MyTask;
