import {Link, NavLink} from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container" id="myDiv">
                    <a style={{color: "white", fontSize: "27px"}} className="navbar-brand" >#Furama</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link"
                                   style={{color: "white", fontFamily: "Tahoma", fontSize: "medium"}} href="#">Trang
                                    chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   style={{color: "white", fontFamily: "Tahoma", fontSize: "medium"}} href="#">Dịch
                                    vụ</a>
                            </li>
                            <li className="nav-item">
                                <div style={{cursor:"pointer"}} className="nav-link">
                                    <NavLink style={{color: "white", textDecoration: "none"}} to="/customers">
                                        Khách hàng
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div style={{cursor:"pointer"}} className="nav-link">
                                    <Link style={{color: "white", textDecoration: "none", marginLeft: "10px"}}
                                             to="/contracts">
                                        Hợp đồng
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;