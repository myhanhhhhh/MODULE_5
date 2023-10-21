import React from "react";
import {getAll} from "../../service/customerService";

function CustomerList() {
    const customers = getAll();
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <div >
                <table style={{width:"100%"}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>CCCD</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Loại khách</th>
                        <th>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender === 0 ? 'Nam' : 'Nữ'}</td>
                            <td>{customer.identity}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.customerType}</td>
                            <td>{customer.address}</td>
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
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CustomerList