import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "../css/clientdashboard.css"

const ClientDashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const name = localStorage.getItem("clientname");
  const email = localStorage.getItem("clientemail");

  return (
    <div className="client-dashboard">
      
      {/* Header */}
      <div className="client-header">
        <div>
          <h2>Welcome, {name}</h2>
          <p>{email}</p>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Navbar */}
      <div className="client-navbar">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>User Area</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
              <Nav.Link as={Link} to="resetpassword">Reset Password</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Content Area */}
      <div className="client-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientDashBoard;
