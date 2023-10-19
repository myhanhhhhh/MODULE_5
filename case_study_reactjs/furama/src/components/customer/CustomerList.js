function CustomerList() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <div style={{display: "inline-block", margin: "30px"}}>
                <table className="table table-striped">
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Dương</td>
                        <td>20/04/1995</td>
                        <td>Nam</td>
                        <td>20000109210</td>
                        <td>0707600447</td>
                        <td>nguyenduong@gmail.com</td>
                        <td>789 Đường IJK, Quận GHJ, TP. Đà Nẵng</td>
                        <td>VVip</td>
                        <td>
                            <a>
                            <button className="btn btn-primary">Sửa</button>

                            <button  type="button" className="btn btn-danger ms-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                Xóa
                            </button>
                            </a>

                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default CustomerList