import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/userService";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async (values) => {
        let dataLogin = await dispatch(login(values))
        checkLogin(dataLogin)
    }

    const checkLogin = (dataLogin) => {
        if (dataLogin.payload.mess) {
            alert('Tài khoản hoặc mật khẩu không đúng')
            localStorage.clear()

        } else {
            alert('Đăng nhập thành công')
            navigate('/home')
        }
    }

    return (
        <div>
            <Formik initialValues={{}} onSubmit={(values) => {
                handleLogin(values)
            }}>

                <Form>

                    <div>
                        <Field type="text" name={'username'}/>
                        <label>Your Name</label>
                    </div>

                    <div>
                        <Field name={'password'} type="password"/>
                        <label>Password</label>
                    </div>

                    <div>
                        <button className="btn btn-primary btn-lg">Login</button>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};

export default Login;