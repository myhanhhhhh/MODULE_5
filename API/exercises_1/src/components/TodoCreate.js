import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios, {create} from "axios";
import * as TodoService from "../../src/service/TodoService" ;
import {useNavigate} from "react-router-dom";
import {date} from "yup";


function TodoCreate() {

    const navigate = useNavigate();
    useEffect(() => {
    }, [])

    const createTodo = async (data) => {
        const status = await TodoService.create(data);
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
                    createTodo(values)
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
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="completed"
                                       id="inlineRadio1"
                                       value="true"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="completed"
                                       id="inlineRadio2"
                                       value="false"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default TodoCreate
