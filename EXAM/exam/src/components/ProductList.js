import axios from "axios";
import async from "async";
import {useEffect, useState} from "react";
import * as productService from "../service/productService"
import {NavLink} from "react-router-dom";
import ProductDelete from "./ProductDelete";

function ProductList() {
    const [products, setProducts] = useState([])

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [types, setTypes] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getType = async () => {
        setTypes(await productService.getType())
    }

    useEffect(() => {
        getType();
    }, [])

    useEffect(() => {
        display()
    }, [name, type])

    const display = async () => {
        let res = await productService.getAll(name, type)
        setProducts(res)
    }

    const handleModal = async (value) => {
        setShowModal(true);
        setSelectedProduct(value);
    }

    const closeModal = async () => {
        setShowModal(false);
        display();
    }


    return (
        <div>
            <div className="container">
                <h1 style={{textAlign: "center", marginTop: "30px"}}>Danh sách sản phẩm </h1>
                <div style={{display: "flex", alignItems: "center", marginRight: "35px"}}>
                    <NavLink style={{marginLeft: "20px"}} to="/create">
                        <button className="btn btn-success">Thêm</button>
                    </NavLink>
                    <input className="form-control" style={{marginLeft: "800px", height: "40px"}}
                           onChange={(evt) => setName(evt.target.value)}
                           placeholder="Nhập tên hàng hoá" type="text"/>
                    <select className="form-control" style={{width: "500px"}}
                            onChange={(evt) => setType(evt.target.value)}>
                        <option className="default" value="">--Chọn thể loại--</option>
                        {types.map((products, index) => (
                            <option key={index} value={products.name}>{products.name}</option>
                        ))}
                    </select>
                </div>
                <table className="table" style={{marginTop:"30px"}}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên</th>
                        <th>Thể loại</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Ngày nhập sản phẩm</th>
                        <th>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.length !== 0 ?
                            products.map((products, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{products.code}</td>
                                    <td>{products.name}</td>
                                    <td>{products.type.name}</td>
                                    <td>{products.price}</td>
                                    <td>{products.quantity}</td>
                                    <td>{products.date}</td>
                                    <td>
                                        <NavLink to={`/update/${products.id}`}>
                                            <button className="btn btn-primary">Sửa</button>
                                        </NavLink>
                                        <button style={{marginLeft: "10px"}} onClick={() => handleModal(products)}
                                                className="btn btn-danger">Xoá
                                        </button>
                                    </td>
                                </tr>
                            )) :
                            <b style={{textAlign: "center"}}>Không có dữ liệu</b>
                    }
                    </tbody>
                </table>
                <ProductDelete
                    show={showModal}
                    select={selectedProduct}
                    handleClose={closeModal}>
                </ProductDelete>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProductList




