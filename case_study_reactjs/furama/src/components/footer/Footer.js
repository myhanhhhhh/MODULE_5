function Footer() {
    return (
        <footer style={{width: "100%", height: "220px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info" style={{marginTop: "3%"}}>
                            <h3>Thông tin liên hệ</h3>
                            <p>Địa chỉ: Số 105, Võ Nguyên Giáp, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng</p>
                            <p>Số điện thoại: 0706513500</p>
                            <p>Email: reservation@furamavietnam.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="social-media" style={{marginTop: "3%"}}>
                            <h3>Kết nối với chúng tôi</h3>
                            <ul className="list-inline social-icons">
                                <li className="list-inline-item"><a href="#" style={{color: "white"}}><i
                                    className="fab fa-facebook">Facebook.com</i></a></li>
                                <li className="list-inline-item"><a href="#" style={{color: "white"}} href=""><i
                                    className="fab fa-instagram">Instagram.com.vn</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="footer-bottom text-center">
                            <p>&copy; 2023 Furama Resort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer