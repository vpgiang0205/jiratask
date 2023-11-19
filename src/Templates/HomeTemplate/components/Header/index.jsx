import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
            <a className="navbar-brand" href="#">CloudPot</a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="menu-page" className="nav-link">Menu CloudPot</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin-page" className="nav-link">
                            <Button type="primary">Login</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
