import Footer from "../footer/Footer";

function Facility() {
    return (
        <div className="col-xl-4 col-sm-6 col-12" style={{display: "flex", marginBottom: "3%"}}>
            <div className="card" style={{width: "23rem"}}>
                <img
                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-double-bed-1-M-1047x563.jpg"
                    className="card-img-top" alt="..." style={{height: "120%"}}/>
                <div className="card-body">
                    <h5 className="card-title">Standard</h5>
                    <p className="card-text">Room size: 85,8m2</p>
                    <div className="text-end">
                        <a href="#" className="btn btn-primary" style={{marginRight:"10px"}}>Sửa</a>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Xoá
                        </button>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                         aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng
                                    </button>
                                    <button type="button" className="btn btn-danger">Xoá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;


