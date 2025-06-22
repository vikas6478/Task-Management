
import { useNavigate } from 'react-router-dom'
import '../css/dashboard.css'
import {Link, Outlet} from "react-router-dom"

const DashBoard = () => {
    const nav = useNavigate();

    const logout = () => {
        localStorage.clear();
        nav("/login");
    }

    return (
        <div className="dashboard-main">
            <div className="dashboard-header">
                <h3>Welcome: {localStorage.getItem("user")}</h3>
                <p>Email: {localStorage.getItem("email")}</p>
                <button onClick={logout}>Logout</button>
            </div>

            <div className="dashboard-body">
                <div className="sidebar">
                    <ul>
                        <li> <Link to="createuser" className="adminmenu"> Create New User </Link> </li>
                        <li><Link to="assigntask" className="adminmenu"> Assign Task </Link> </li>
                        <li><Link to="taskdetail" className="adminmenu">Task Detail</Link> </li>
                    </ul>
                </div>

                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
