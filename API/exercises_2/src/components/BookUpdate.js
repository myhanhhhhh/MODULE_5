import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios, {create} from "axios";
import * as BookService from "../../src/service/BookService" ;
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {date} from "yup";


function BookCreate() {
    const [books, setBooks] = useState(null);
    const navigate = useNavigate();
    const param = useParams();

    const getBook = async (id) => {
        let response = await BookService.findById(id)
        setBooks(response);
    }

    const updateBook = async (data) => {
        const status = await BookService.update(data);
        console.log(status)
        if (status === 200) {
            navigate('/');
            toast("OKE");
        } else {
            toast.error("FAIL");
        }
    }

    useEffect(() => {
        getBook(param.id)
    }, [])
    if (!books) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={books}
                onSubmit={(values) => {
                    console.log(values)
                    updateBook(values)
                }}
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
                        <button style={{marginLeft:"10px"}} type='submit' className='btn btn-primary'>Update</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default BookCreate
