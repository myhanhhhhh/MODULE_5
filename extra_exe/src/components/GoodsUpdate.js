import React, {useEffect, useState} from "react";
import * as goodsService from "../service/goodsService"
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {NavLink, useNavigate, useParams} from "react-router-dom";

function GoodsUpdate() {
    const [goods, setGoods] = useState();
    const [goodsTypes, setGoodsTypes] = useState([]);
    const navigate = useNavigate();
    const param = useParams();// lấy value trên url
    // console.log(param)
    // console.log(param.id)

    const getGoods = async () => {
        let response = await goodsService.findById(param.id);
        setGoods(response);
    }

    const getGoodsType = async () => {
        setGoodsTypes(await goodsService.getGoodsType());
    }
    const updateGoods = async (data) => {
        console.log(data)
        let newGoods = {
            ...data,
            goodsType: JSON.parse(data.goodsType)
        }
        console.log(newGoods)
        const response = await goodsService.update(newGoods);
        if (response.status === 200) {
            navigate('/goods');
            toast.success("OKE");
        } else {
            toast.error("FAIL");
        }
    }

    useEffect(() => {
        getGoods()
        getGoodsType()
    }, [])

    const initValue =
        goods &&
        {
            id: goods.id,
            goodsCode: goods.goodsCode,
            name: goods.name,
            unit: goods.unit,
            price: goods.price,
            goodsType: JSON.stringify(goods.goodTsype),
            time: goods.time
        }
    const currentDate = new Date();

    const validateObject = {
        goodsCode: Yup.string()
            .required("Required")
            .matches(/^MHH-[A-Z0-9]+$/, "+ Mã hàng hoá (MHH-XXXX) => X là các số hoặc chữ in Hoa"),
        name: Yup.string()
            .required("Required"),
        unit: Yup.string()
            .required("Required"),
        price: Yup.string()
            .required("Required")
            .min(1, "Giá phải là số nguyên dương  và >= 1.000 VNĐ"),
        time: Yup.date()
            .required("Required")
            .min(currentDate)
    };
    if (!goods) {
        return null;
    }

    return (
        <div>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    updateGoods(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4" style={{textAlign: "center", marginTop:"30px"}}>S hàng hoá</h1>
                    <Form>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Mã hàng hoá<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="goodsCode" className='form-control' id='goodsCode'/>
                            <ErrorMessage name="goodsCode" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Tên<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <b className="form-label" htmlFor="gender">Đơn vị tính:</b>
                            <div>
                                <Field as="select" id="unit" name="unit" class="form-control"
                                       style={{width: "100%"}}>
                                    <option value="">-- Chọn vị tính --</option>
                                    <option value="Kg">Kg</option>
                                    <option value="Túi">Túi</option>
                                    <option value="Bó">Bó</option>
                                </Field>
                                <ErrorMessage name="unit" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Giá<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="price" className='form-control' id='price'/>
                            <ErrorMessage name="price" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <b className="form-label" htmlFor="goodsType">Loại hàng hoá:</b>
                            <div>
                                <Field as="select" id="goodsType" name="goodsType" className="form-control"
                                       style={{width: "100%"}}>
                                    {goodsTypes && goodsTypes.map((goods, index) => (
                                        <option key={index} value={JSON.stringify(goods)}>
                                            {goods.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="goodsType" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ngày thu hoạch<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='date' name="time" className='form-control' id='time'/>
                            <ErrorMessage name="time" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <NavLink to="/goods">
                                <button className="btn btn-secondary">Huỷ</button>
                            </NavLink>
                            <button style={{marginLeft: "10px"}} type='submit' className='btn btn-primary'>Thêm
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}
export default GoodsUpdate