import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

function MedicalForm() {
    const initValue = {
        name: "",
        identity: "",
        age: 1900,
        gender: "1",
        nationality: "",
        company: "",
        department: "",
        insuranceCard: "",
        city: "",
        district: "",
        ward: "",
        homeNumber: "",
        phoneNumber: "",
        email: "",
        expression:[],
        touch:[]
    };

    const validateObject = {
        name: Yup.string()
            .required("Tên không được để trống")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng format"),
        identity: Yup.string()
            .required("CCCD không được để trống"),
        age: Yup.number()
            .required("Tuổi không được để trống")
            .min(1900, "Năm sinh phải lớn hơn 1900"),
        nationality: Yup.string()
            .required("Quốc tịch không được để trống"),
        city: Yup.string()
            .required("Thành phố không được để trống"),
        district: Yup.string()
            .required("Quận không được để trống"),
        ward: Yup.string()
            .required("Phường không được để trống"),
        homeNumber: Yup.string()
            .required("Số nhà không được để trống"),
        phoneNumber: Yup.string()
            .required("SDT không được để trống")
            .matches(/^(0|\+84)\d{9,10}$/, "SDT không đúng format"),
        email: Yup.string()
            .required("Email không được để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng format"),

    };

    const handleFormSubmit = (values) => {
        console.log(values);
        toast("Submit thành công");
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                   handleFormSubmit(values)
                }}
                validationSchema={Yup.object(validateObject)
                }
            >
                <div className='container'>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Họ tên</label>
                            <Field type='text' className='form-control' name="name" id='Name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Card' className='form-label'>CCCD</label>
                            <Field type='text' className='form-control' name="identity" id='Identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Age' className='form-label'>Tuổi</label>
                            <Field type='number' className='form-control' name="age" id='Age'/>
                            <ErrorMessage name="age" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <span>Giới tính:</span>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Nationality' className='form-label'>Quốc tịch</label>
                            <Field type='text' className='form-control' name="nationality" id='Nationality'/>
                            <ErrorMessage name="nationality" component="span" style={{color: "red"}}
                                          className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Company' className='form-label'>Công ty làm việc</label>
                            <Field type='text' className='form-control' name="company" id='Company'/>
                            <ErrorMessage name="company" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Department' className='form-label'>Bộ phận</label>
                            <Field type='text' className='form-control' name="department" id='Department'/>
                            <ErrorMessage name="department" component="span" style={{color: "red"}}
                                          className="form-err"/>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="InsuranceCard"
                                   name="insuranceCard"
                                   id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Có thẻ bảo hiểm y tế
                            </label>
                        </div>
                        <h3>Địa chỉ liên lạc tại việt nam</h3>
                        <div className='mb-3'>
                            <label htmlFor='Province' className='form-label'>Tỉnh thành</label>
                            <Field type='text' className='form-control' name="city" id='City'/>
                            <ErrorMessage name="city" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='District' className='form-label'>Quận/Huyện</label>
                            <Field type='text' className='form-control' name="district" id='District'/>
                            <ErrorMessage name="district" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Ward' className='form-label'>Phường/Xã</label>
                            <Field type='text' className='form-control' name="ward" id='Ward'/>
                            <ErrorMessage name="ward" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HomeNumber' className='form-label'>Số nhà, tổ dân phố, thôn/đội</label>
                            <Field type='text' className='form-control' name="homeNumber" id='HomeNumber'/>
                            <ErrorMessage name="homeNumber" component="span" style={{color: "red"}}
                                          className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='PhoneNumber' className='form-label'>Điện thoại</label>
                            <Field type='text' className='form-control' name="phoneNumber" id='PhoneNumber'/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}
                                          className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' name="email" id='Email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}} className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='history' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có đến
                                quốc
                                gia / vùng lãnh thổ nào(có thể đi qua nhiều quốc gia)</h4></label>
                            <Field as="textarea" className='form-control' name="history" id='history'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='symptom' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có xuất
                                hiện một trong các dấu hiệu sau không?</h4></label>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="ho" name="expression"
                                       id="cb2"/>
                                <label className="form-check-label" htmlFor="cb2">
                                    Ho
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="sot" name="expression"
                                       id="cb3"/>
                                <label className="form-check-label" htmlFor="cb3">
                                    Sốt
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="khotho" name="expression"
                                       id="cb4"/>
                                <label className="form-check-label" htmlFor="cb34">
                                    Khó thở
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="phoi" name="expression"
                                       id="cb5"/>
                                <label className="form-check-label" htmlFor="cb5">
                                    Viêm phổi
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="hong" name="expression"
                                       id="cb6"/>
                                <label className="form-check-label" htmlFor="cb6">
                                    Đau họng
                                </label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='meet' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc
                                với?</h4></label>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="nghingo" name="touch"
                                       id="cb7"/>
                                <label className="form-check-label" htmlFor="cb7">
                                    Người bệnh hoặc nghi ngờ mắc bệnh COVID-19
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="nguoila" name="touch"
                                       id="cb8"/>
                                <label className="form-check-label" htmlFor="cb8">
                                    Người từ nước có bệnh COVID-19
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="trieuchung" name="touch"
                                       id="cb9"/>
                                <label className="form-check-label" htmlFor="cb9">
                                    Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
                                </label>
                            </div>

                        </div>
                        <button style={{width: "100%"}} type='submit' className='btn btn-primary'>Gửi</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default MedicalForm
