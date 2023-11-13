import axios from "axios";
import async from "async";
import {useEffect, useState} from "react";
import * as productService from "../service/productService"
import {NavLink, useNavigate, useParams} from "react-router-dom";
import *as Yup from "yup"
import {toast} from "react-toastify"
import {ErrorMessage, Field, Formik, Form} from "formik";

function ProductCreate() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getType()
    }, [])

    const getType = async () => {
        setProducts(await productService.getType());
    }

    const createProduct = async (data) => {
        console.log(data)
        let newProduct = {
            ...data,
            type: JSON.parse(data.type),
        }
        console.log(newProduct)
        const res = await productService.create(newProduct)
        console.log(res)

        if (res.status == 200) {
            toast.success("OKE")
            navigate("/")
        } else {
            toast.error("Fail")
        }
    }
    const initValue = {
        code: "",
        name: "",
        type: JSON.stringify({
            id: 1,
            name: "Thực phẩm chức năng"
        }),
        price: 0,
        quantity: 0,
        date: ""
    }

    const validateObject = {
        code: Yup.string().required("Không được để trống")
            .matches(/^PROD-[0-9]+$/, "+ Mã sản phẩm PROD-XXXX  ( X- chữ chữ số)"),
        name: Yup.string().required("Không được để trống"),
        price: Yup.number().required("Không được để trống"),
        quantity: Yup.number().required("Không được để trống")
            .min(1, "Phải lớn hơn 0"),
        date: Yup.date().required("Không được để trống")
            .max(new Date(),"Không nhập quá ngày hiện tại")
    }

    return (
        <div>
            <Formik initialValues={initValue}
                    onSubmit={(values) => {
                        createProduct(values)
                    }}
                    validationSchema={Yup.object(validateObject)}
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4" style={{marginTop: "30px"}}>Thêm mới sản phẩm</h1>
                    <Form>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Mã sản phẩm<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="code" className='form-control' id='code'/>
                            <ErrorMessage name="code" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Tên<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <b className="form-label" htmlFor="customerType">Thể loại</b>
                            <div>
                                <Field as="select" id="type" name="type" className="form-control"
                                       style={{width: "100%"}}>
                                    {products.map((products, index) => (
                                        <option key={index} value={JSON.stringify(products)}>
                                            {products.name}
                                        </option>
                                    ))}
                                </Field>
                                {/*<ErrorMessage name="type" component="span"*/}
                                {/*              style={{color: "red"}}></ErrorMessage>*/}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Số lượng<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="quantity" className='form-control' id='quantity'/>
                            <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Giá<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="price" className='form-control' id='price'/>
                            <ErrorMessage name="price" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ngày nhập sản phẩm<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='date' name="date" className='form-control' id='date'/>
                            <ErrorMessage name="date" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <NavLink to="/">
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
export default ProductCreate