import React, {useState} from "react";
import * as facilityService from "../../service/facilityService"
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {NavLink, useNavigate} from "react-router-dom";

function FacilityCreate() {
    const [villas, setVillas] = useState([]);
    const navigate = useNavigate();

    const createFacility = async (data) => {
        const response = await facilityService.create(data);
        console.log(response);
        if (response.status === 201) {
            navigate('')
            navigate("/contracts")
            toast.success("OKE^^")
        } else {
            toast.error("FAIL")
        }
    }
    const initValue = {
        contractNumber: "",
        startDate: "",
        endDate: "",
        deposit: "",
        total: ""
    }
    const validateObject = {
        contractNumber: Yup.string()
            .required("Required")
            .matches(/^HD-\d+$/, "phai bat dau HD-xxx"),
        startDate: Yup.date()
            .required("Required"),
        endDate: Yup.date()
            .required("Required"),
        deposit: Yup.number()
            .required("Required")
            .min(0, "Phải là số nguyên dương"),
        total: Yup.number()
            .required("Required")
            .min(0, "Phải là số nguyên dương"),
    };
    return (
        <div>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    createFacility(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4">Thêm mới hợp đồng</h1>
                    <Form>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Số hợp đồng<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='text' name="contractNumber" className='form-control' id='contractNumber'/>
                            <ErrorMessage name="contractNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ngày bắt đầu<span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='date' name="startDate" className='form-control' id='startDate'/>
                            <ErrorMessage name="startDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Ngày kết thúc <span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='date' name="endDate" className='form-control' id='endDate'/>
                            <ErrorMessage name="endDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Tiền cọc tước <span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='number' name="deposit" className='form-control' id='deposit'/>
                            <ErrorMessage name="deposit" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <b htmlFor='studentPhone' className='form-label'>Tổng tiền <span
                                style={{color: "red"}}>*</span>:</b>
                            <Field type='number' name="total" className='form-control' id='total'/>
                            <ErrorMessage name="total" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <NavLink to="/contracts">
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
export default FacilityCreate;
