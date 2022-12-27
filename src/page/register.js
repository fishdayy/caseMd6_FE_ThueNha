import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../service/userService";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRegister = async (values) => {
        let data = {
            username: values.username,
            password: values.password
        }
        let registerMess = await dispatch(register(data))
        checkRepeatUser(registerMess)
    }
    const checkRepeatUser = (registerMess) => {
        if (registerMess.payload.mess == 'Tài khoản đã tồn tại') {
            alert('Tài khoản đã tồn tại')
        } else {
            alert('Tạo tài khoản thành công')
            navigate('/login')
        }
    }
    return (
        <div>
            <Formik initialValues={{}} onSubmit={(values) => {
                handleRegister(values)
            }}>

                <Form>

                    <div>
                        <Field name={'username'} type="text"/>
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>

                    <div>
                        <Field name={'password'} type="password"/>
                        <label>Password</label>
                    </div>

                    <div>
                        <Field name={'repeat'} type="password"/>
                        <label>Repeat your password</label>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-lg">Register</button>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

export default Register;