import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios, {create} from "axios";
import * as BookService from "../../src/service/BookService" ;
import {NavLink, useNavigate} from "react-router-dom";
import {date} from "yup";


function BookCreate() {
    const navigate = useNavigate();
    useEffect(() => {
    }, [])

    const createBook = async (data) => {
        const status = await BookService.create(data);
        console.log(status)
        if (status === 201) {
            navigate('/');
            toast("OKE");
        } else {
            toast.error("FAIL");
        }
    }
    const initValue = {
        id: 0,
        quantity: 0,
        title: "",
    };

    const validateObject = {
        title: Yup.string()
            .required("Required"),
        quantity: Yup.string()
            .required("Required")
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                    createBook(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container'>
                    <h1>Create Student</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Title</label>
                            <Field type='text' name="title" className='form-control' id='title'/>
                            <ErrorMessage name="title" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentPhone' className='form-label'>Quantity</label>
                            <Field type='text' name="quantity" className='form-control' id='quantity'/>
                            <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <NavLink to="/" >
                            <button className="btn btn-secondary">Cancel</button>
                        </NavLink>
                        <button style={{marginLeft:"10px"}} type='submit' className='btn btn-primary'>Create</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default BookCreate
