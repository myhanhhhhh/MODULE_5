import React from "react";
import {getAll} from "../../service/contractService";

function ContractList() {
    const contracts = getAll();
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Danh sách hợp đồng</h1>
            <div>
                <table style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền cọc tước</th>
                        <th>Tổng tiền</th>
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
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContractList