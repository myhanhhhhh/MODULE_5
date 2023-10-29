import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios from "axios";
import * as customerService from "../../service/customerService"
import {NavLink, useNavigate} from "react-router-dom";
import {date} from "yup";
 function CustomerCreate() {
    const navigate = useNavigate();
    const [customerTypes, setCustomerTypes] = useState([])

    const getCustomerType = async () => {
        setCustomerTypes(await customerService.getCustomerType());
    }

    const createCustomer = async (data) => {
        let newCustomer = {
            ...data,
            customerType: JSON.parse(data.customerType),

        }
        data.gender = +data.gender;
        const response = await customerService.create(newCustomer);
        if (response.status === 201) {
            // setCustomerList((prevList) => [newCustomer, ...prevList]);
            navigate('/customers');
            toast.success("OKE");
        } else {
            toast.error("FAIL");
        }
    }

    useEffect(() => {
        getCustomerType()
    }, [])

    const initValue = {
        name: "",
        birthday: "",
        gender: "",
        identity: "",
        phoneNumber: "",
        email: "",
        customerType: JSON.stringify({
            id: 5,
            name: "Member"
        }),
        address: ""
    };

    const validateObject = {
        name: Yup.string()
            .required("Required"),
        birthday: Yup.date()
            .required("Required"),
        identity: Yup.string()
            .required("Required")
            .matches(/^\d{9}$|^\d{12}$/, "Số CCCD phải 9 hoặc 12 số!"),
        gender: Yup.number()
            .required("Required"),
        phoneNumber: Yup.string()
            .required("Required")
            .matches(/^(0|\+84)\d{9,10}$/, "SDT không đúng format"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng format"),
        address: Yup.string()
            .required("Required"),
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                    createCustomer(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4">Thêm mới khách hàng</h1>
                    <Form>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ten<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ngay sinh<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='date' name="birthday" className='form-control' id='birthday'/>
                            <ErrorMessage name="birthday" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <b className="form-label" htmlFor="gender">Giới tính:</b>
                            <div>
                                <Field as="select" id="gender" name="gender" class="form-control"
                                       style={{width: "100%"}}>
                                    <option value="">-- Chọn giới tính --</option>
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </Field>
                                <ErrorMessage name="gender" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>CCCD<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="identity" className='form-control' id='identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>So dien thoai<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="phoneNumber" className='form-control' id='phoneNumber'/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Email<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Dia chi<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="address" className='form-control' id='address'/>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <b className="form-label" htmlFor="customerType">Loại khách:</b>
                            <div>
                                <Field as="select" id="customerType" name="customerType" className="form-control"
                                       style={{width: "100%"}}>
                                    {customerTypes.map((customer, index) => (
                                        <option key={index} value={JSON.stringify(customer)}>
                                            {customer.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="customerType" component="span"
                                              style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <NavLink to="/customers">
                                <button className="btn btn-secondary">Huỷ</button>
                            </NavLink>
                            <button style={{marginLeft: "10px"}} type='submit' className='btn btn-primary'>Thêm
                            </button>
                        </div>

                    </Form>
                </div>
            </Formik>
        </>
    )
}
export default CustomerCreate

