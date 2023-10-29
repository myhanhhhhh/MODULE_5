import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customerService"
import {NavLink, Link} from "react-router-dom";
import {DeleteCustomer} from "./CustomerDelete";
import {Field} from "formik";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [customerType, setCustomerType] = useState("");


    const display = async () => {
        let response = await customerService.getAll(name, customerType)
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
    }, [name, customerType]);

    console.log(selectedCustomer)
    console.log(showModal)

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <div style={{ display: "flex", alignItems: "center" , marginRight:"35px"}}>
                <NavLink style={{marginLeft: "20px"}} to="/customers/create">
                    <button className="btn btn-success">Thêm </button>
                </NavLink>
                <input className="form-control" style={{marginLeft: "750px", height: "40px"}} onChange={(evt) => setName(evt.target.value)}
                       placeholder="Nhập tên khách hàng" type="text"/>
                <select style={{width: "230px"}} id="customerType" name="customerType" className="form-control"
                        onChange={(evt) => setCustomerType(evt.target.value)}>
                    <option value="">--Chọn loại khách hàng--</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Member">Member</option>
                </select>
            </div>
            <div className="container-fluid">
                {customers.length > 0 ?
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
                        ))
                        }
                        </tbody>
                    </table>
                    : (
                        <p style={{textAlign: "center", fontSize: "25px", fontStyle: "italic"}}>Không có dữ liệu
                            ^^</p>
                    )
                }
                <DeleteCustomer
                    show={showModal}
                    select={selectedCustomer}
                    handleClose={closeModal}>
                </DeleteCustomer>
            </div>
        </div>
    )
}

