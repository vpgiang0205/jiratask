import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center ">
            <div className="d-flex">
                <a className="navbar-brand" href="#">Jiratask</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin-page" className="nav-link">
                                <Button type="primary">Login</Button>
                            </Link>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}