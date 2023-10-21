function Header(){
    return(
        <header >
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a style={{color:"white",fontSize:"27px"}} className="navbar-brand" href="index.html">#Furama</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link"  style={{color:"white", fontFamily:"Tahoma", fontSize:"medium"}} href="#">Trang
                                    chủ</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link"
                                   style={{color:"white", fontFamily:"Tahoma", fontSize:"medium"}} href="#">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link"
                                   style={{color:"white", fontFamily:"Tahoma", fontSize:"medium"}} href="#">Khách hàng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   style={{color:"white", fontFamily:"Tahoma", fontSize:"medium"}} href="#">Hợp đồng</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;