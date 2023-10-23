import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
function ContactForm() {
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    const validateObject = {
        name: Yup.string()
            .required("Tên không được để trống")
            .matches( /^[A-Za-z ]{3,100}$/, "Tên không đúng format"),
        email: Yup.string()
            .required("Email không được để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng format"),
        phone: Yup.string()
            .required("SDT không được để trống")
            .matches(/^(0|\+84)\d{9,10}$/, "SDT không đúng format"),
        message: Yup.string()
            .required("Lời nhắn không được để trống")
            .matches(/^[A-Za-z ]{3,100}$/, "Lời nhắn không đúng format"),
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                    // alert("Submit thành công")
                    toast("Submit thành công")
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container'>
                    <h1>Create Student</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='studentName'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='studentAge'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Phone</label>
                            <Field type='text' name="phone" className='form-control' id='studentPhone'/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentMessage' className='form-label'>Message</label>
                            <Field type='text' name="message" className='form-control' id='studentMessage'/>
                            <ErrorMessage name="message" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default ContactForm
