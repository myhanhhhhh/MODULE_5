import React from "react";
import {getAll} from "../../service/contractService";

function ContractList() {
    const contracts = getAll();
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <div >
                <table style={{width:"100%"}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc </th>
                        <th>Tiền cọc tước</th>
                        <th>Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contracts.map(contract => (
                        <tr key={contract.id}>
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