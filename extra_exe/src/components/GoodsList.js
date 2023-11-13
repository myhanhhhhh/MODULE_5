import React, {useEffect, useState} from "react";
import * as goodsService from "../service/goodsService"
import {NavLink, Link} from "react-router-dom";
import {DeleteGoods} from "./GoodsDelete";

export function GoodsList() {
    const [goods, setGoods] = useState([]);
    const [selectedGoods, setSelectedGoods] = useState();
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [goodsType, setGoodsType] = useState("");

    useEffect(() => {
        display();
    }, [name, goodsType]);

    const display = async () => {
        let response = await goodsService.getAll(name, goodsType)
        console.log(response)
        setGoods(response);
    }

    const handleModal = async (value) => {
        setShowModal(true);
        setSelectedGoods(value);
    }

    const closeModal = async () => {
        await display()
        setShowModal(false);
    }


    return (
        <div className="container">
            <h1 style={{textAlign: "center", marginTop:"30px"}}>Danh sách hàng hoá </h1>
            <div style={{display: "flex", alignItems: "center", marginRight: "35px"}}>
                <NavLink style={{marginLeft: "20px"}} to="/goods/create">
                    <button className="btn btn-success">Thêm</button>
                </NavLink>
                <input className="form-control" style={{marginLeft: "750px", height: "40px"}}
                       onChange={(evt) => setName(evt.target.value)}
                       placeholder="Nhập tên hàng hoá" type="text"/>
                <select style={{width: "230px"}} id="goodsType" name="goodsType" className="form-control"
                        onChange={(evt) => setGoodsType(evt.target.value)}>
                    <option value="">--Chọn loại hàng hoá--</option>
                    <option value="Rau">Rau</option>
                    <option value="Củ">Củ</option>
                    <option value="Quả">Quả</option>
                    <option value="Hoa">Hoa</option>
                </select>
            </div>
            <div className="container-fluid">
                {goods.length > 0 ?
                    <table style={{width: "100%", marginTop:"20px"}}class="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hàng hoá</th>
                            <th>Tên</th>
                            <th>Đơn vị tính</th>
                            <th>Giá</th>
                            <th>Loại hàng hoá</th>
                            <th>Ngày thu hoạch</th>
                            <th>Chức năng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {goods.map((goods, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{goods.goodsCode}</td>
                                <td>{goods.name}</td>
                                <td>{goods.unit}</td>
                                <td>{goods.price}</td>
                                <td>{goods.goodsType.name}</td>
                                <td>{goods.time}</td>
                                <td>
                                    <NavLink to={`/goods/update/${goods.id}`}>
                                        <button className="btn btn-primary">Sửa</button>
                                    </NavLink>
                                    <button className="btn btn-danger ms-2"
                                            onClick={() => handleModal(goods)}>Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                    : (
                        <p style={{textAlign: "center", fontSize: "25px", fontStyle: "italic",marginTop:"60px"}}>Không có dữ liệu
                            ^^</p>
                    )
                }
                <DeleteGoods
                    show={showModal}
                    select={selectedGoods}
                    handleClose={closeModal}>
                </DeleteGoods>
            </div>
        </div>

    )
}

