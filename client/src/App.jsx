import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import DashBoard from './pages/Dashboard'
import CreateUser from './pages/CreateUser'
import AssignTask from './pages/AssignTask'
import ClientDashBoard from './pages/ClientDashBoard'
import MyTask from './pages/MyTask'
import TaskDetail from './pages/TaskDetail'
import ResetPassword from './pages/ResetPassword'


const App = () => {
  return (
    <>
        <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
      </Route>
     </Routes>

     <Routes>
      <Route path='dashboard' element={<DashBoard/>}>
             <Route path="createuser" element={<CreateUser/>}/>
             <Route path="assigntask" element={<AssignTask/>}/>
             <Route path="taskdetail" element={<TaskDetail/>} />
      </Route>
     </Routes>

        <Routes>
          <Route path="clientdashboard" element={<ClientDashBoard/>}>
            <Route path="mytask" element={<MyTask/>}/>
             <Route path="resetpassword" element={<ResetPassword/>} />

          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
