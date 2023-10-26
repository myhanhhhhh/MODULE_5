import {NavLink, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import *as contractService from "../../service/contractService";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Formik, Form} from "formik";

function ContractUpdate() {
    const [contracts, setContracts] = useState();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getContract(param.id)
    }, [])

    const getContract = async (id) => {
        let response = await contractService.finById(id);
         setContracts(response);
    }

    const updateContract = async (data) => {
        // console.log(data+`--------`)
        const response = await contractService.update(data);
        if (response.status === 200) {
            navigate("/contracts")
            toast.success("OKE^^");
        } else {
            toast.error("FAIL");
        }
    }

    const initValue =
        contracts &&
        {
            id: contracts.id,
            contractNumber: contracts.contractNumber,
            startDate: contracts.startDate,
            endDate: contracts.endDate,
            deposit: contracts.deposit,
            total: contracts.total
        }

    // console.log(`------------` + contracts);
    // console.log(contracts)
    // console.log(initValue + `----true-------`)


    const validateObject = {
        contractNumber: Yup.string()
            .required("Required"),
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

    if (!contracts) {
        return null
    }

    return (
        <div>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    updateContract(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container' style={{marginLeft: "220px", width: "70%"}}>
                    <h1 className="mb-4">Sửa thông tin hợp đồng</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Số hợp đồng<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='text' name="contractNumber" className='form-control' id='contractNumber'/>
                            <ErrorMessage name="contractNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Ngày bắt đầu<span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='date' name="startDate" className='form-control' id='startDate'/>
                            <ErrorMessage name="startDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Ngày kết thúc <span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='date' name="endDate" className='form-control' id='endDate'/>
                            <ErrorMessage name="endDate" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Tiền cọc tước <span
                                style={{color: "red"}}>*</span>:</label>
                            <Field type='number' name="deposit" className='form-control' id='deposit'/>
                            <ErrorMessage name="deposit" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Tổng tiền <span
                                style={{color: "red"}}>*</span>:</label>
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

export default ContractUpdate
