import React, {useEffect, useState} from "react";
import *as contractService from "../../service/contractService";
import {NavLink} from "react-router-dom";
import DeleteContract from "./ContractDelete";

function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [selectContracts, setSelectContracts] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [contractNumber, setContractNumber] = useState("");
    const [startDate, setStartDate] = useState("");
    const display = async () => {
        let response = await contractService.getAll(contractNumber,startDate)
        setContracts(response);
    }
    const handleModal = async (value) => {
        setShowModal(true);
        setSelectContracts(value)
    }

    const closeModal = async () => {
        setShowModal(false);
        display();
    }

    useEffect(() => {
        display();
    }, [contractNumber,startDate])
    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>Danh sách hợp đồng</h1>
            <NavLink style={{marginLeft: "20px"}} to="/contracts/create">
                <button className="btn btn-success">Thêm mới</button>
            </NavLink>
            <input style={{marginLeft: "1100px", height: "40px"}} onChange={(evt) => setContractNumber(evt.target.value)}
                   placeholder="Nhập Số hợp đồng" type="text"/>
            {/*<input style={{height: "40px"}} onChange={(evt) => setStartDate(evt.target.value)}*/}
            {/*       placeholder="Nhập ngày bắt đầu " type="text"/>*/}
            <div className="container-fluid">
                <table style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền cọc tước</th>
                        <th>Tổng tiền</th>
                        <th>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contracts.map((contract, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{contract.contractNumber}</td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.total}</td>
                            <td>

                                <button className="btn btn-primary">
                                    <NavLink to={`/contracts/update/${contract.id}`}>
                                        Sửa
                                    </NavLink>
                                </button>
                                <button className="btn btn-danger ms-2" onClick={(value) => handleModal(contract)}
                                >Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteContract
                    show={showModal}
                    select={selectContracts}
                    handleClose={closeModal}>
                </DeleteContract>
            </div>
        </div>
    )
}

export default ContractList