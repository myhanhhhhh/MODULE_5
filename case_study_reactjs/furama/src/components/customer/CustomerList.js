import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customerService"
import {NavLink, Link} from "react-router-dom";
import {DeleteCustomer} from "./CustomerDelete";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");


    const display = async () => {
        let response = await customerService.getAll(name)
        setCustomers(response);
    }

    const handleModal = async (value) => {
        setShowModal(true);
        setSelectedCustomer(value);
    }

    const closeModal = async () => {
        display()
        setShowModal(false);
    }

    useEffect(() => {
        display();
    }, [name]);

    console.log(selectedCustomer)
    console.log(showModal)

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <NavLink style={{marginLeft: "20px"}} to="/customers/create">
                <button className="btn btn-success">Thêm mới</button>
            </NavLink>
            <input style={{marginLeft: "1100px", height: "40px"}} onChange={(evt) => setName(evt.target.value)}
                   placeholder="Nhập tên khách hàng" type="text"/>
            <div className="container-fluid">
                <table style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th>STT</th>
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
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender === 0 ? 'Nữ' : 'Nam'}</td>
                            <td>{customer.identity}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>{customer.customerType.name}</td>
                            <td>
                                <NavLink to={`/customers/update/${customer.id}`}>
                                    <button className="btn btn-primary">Sửa</button>
                                </NavLink>
                                <button className="btn btn-danger ms-2"
                                        onClick={() => handleModal(customer)}>Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteCustomer
                    show={showModal}
                    select={selectedCustomer}
                    handleClose={closeModal}>
                </DeleteCustomer>
            </div>
        </div>
    )
}

