import { Button } from 'antd';
import { useCheckRole } from '../../../../hooks/useCheckRole'
import { useNavigate } from 'react-router-dom';
export default function Navigator() {
    const user = useCheckRole();

    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("USER_LOGIN");
            navigate(`/`);
        }
    }
    
    return (
        (user) && (
            <div>
                <ul className="fixed p-2 nav nav-pills bg-dark flex-column" style={{ minHeight: "100vh" }}>
                    <li className="nav-item">
                        <a href="#" className="nav-link">hello, {user.name}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">view all projects</a>
                            <a className="dropdown-item" href="#">create project</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Users</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">view all users</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">Create Task</a>
                    </li>
                    <li className="nav-item">
                        <li className="nav-link">
                            <Button type='primary' danger onClick={handleLogout}>Logout</Button>
                        </li>
                    </li>
                </ul>
            </div>

        )
    )
}
