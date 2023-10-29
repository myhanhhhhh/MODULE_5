import {Link, NavLink} from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a style={{color: "white", fontSize: "27px"}} className="navbar-brand">#Furama</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/*<ul className="navbar-nav">*/}
                        <Link to="/customers">CHANHS</Link>
                        <Link to="/contracts">CHANH</Link>
                            {/*<li className="nav-item">*/}
                                <a className="nav-link"
                                   style={{color: "white", fontFamily: "Tahoma", fontSize: "medium"}} href="#">Trang
                                    chủ</a>
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                <a className="nav-link"
                                   style={{color: "white", fontFamily: "Tahoma", fontSize: "medium"}} href="#">Dịch
                                    vụ</a>
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                <div style={{cursor: "pointer"}} className="nav-link">
                                    <NavLink style={{color: "white", textDecoration: "none"}} to="/customers">
                                        Khách hàng
                                    </NavLink>
                                </div>
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                <div style={{cursor: "pointer"}} className="nav-link">
                                    <Link style={{color: "white", textDecoration: "none", marginLeft: "10px"}}
                                          to="/contracts">
                                        Hợp đồng
                                    </Link>
                                </div>
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;