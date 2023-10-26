import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios, {create} from "axios";
import * as customerService from "../../service/customerService"
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {date} from "yup";


function CustomerUpdate() {
    const [customers, setCustomers] = useState(null);
    const [customerTypes, setCustomerTypes] = useState([]);
    const navigate = useNavigate();
    const param = useParams();// lấy value trên url
    console.log(param)
    console.log(param.id)

    const getCustomer = async () => {
        let response = await customerService.findById(param.id);
        setCustomers(response);
    }

    const getCustomerType = async () => {
        setCustomerTypes(await customerService.getCustomerType());
    }
    const updateCustomer = async (data) => {
        console.log(data)
        let newCustomer = {
            ...data,
            customerType: JSON.parse(data.customerType)
        }
        data.gender = +data.gender
        console.log(newCustomer)
        const response = await customerService.update(newCustomer);
        if (response.status === 200) {
            navigate('/customers');
            toast("OKE");
        } else {
            toast.error("FAIL");
        }
    }

    useEffect(() => {
        getCustomer()
        getCustomerType()
    }, [param.id])

    const initValue =
        customers &&
        {
            id: customers.id,
            name: customers.name,
            birthday: customers.birthday,
            gender: customers.gender,
            identity: customers.identity,
            phoneNumber: customers.phoneNumber,
            email: customers.email,
            customerType: JSON.stringify(customers.customerType),
            address: customers.address
        }

    if (!customers) {
        return null;
    }
    const validateObject = {
        name: Yup.string()
            .required("Required"),
        identity: Yup.string()
            .required("Required")
            .matches(/^\d{9}$|^\d{12}$/, "Số CCCD phải 9 hoặc 12 số!"),
        phoneNumber: Yup.string()
            .required("Required")
            .matches(/^(0|\+84)\d{9,10}$/, "SDT không đúng format"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng format"),
        address: Yup.string()
            .required("Required")
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                    updateCustomer(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4">Sửa thông tin khách hàng</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Ten<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Ngay sinh:</label>
                            <Field type='date' name="birthday" className='form-control' id='birthday'/>
                            <ErrorMessage name="birthday" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="gender">Giới tính:</label>
                            <div>
                                <Field as="select" id="gender" name="gender" class="form-control"
                                       style={{width: "100%"}}>
                                    <option value="">-- Chọn giới tính --</option>
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </Field>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>CCCD<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="identity" className='form-control' id='identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>So dien thoai<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="phoneNumber" className='form-control' id='phoneNumber'/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Email<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Dia chi<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="address" className='form-control' id='address'/>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="customerType">Loại khách:</label>
                            <div>
                                <Field as="select" id="customerType" name="customerType" className="form-control"
                                       style={{width: "100%"}}>
                                    {customerTypes.map((type, index) => (
                                        <option key={index} value={JSON.stringify(type)}>
                                            {type.name}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <NavLink to="/customers">
                                <button className="btn btn-secondary">Huỷ</button>
                            </NavLink>
                            <button style={{marginLeft: "10px"}} type='submit' className='btn btn-primary'>Sửa
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default CustomerUpdate
