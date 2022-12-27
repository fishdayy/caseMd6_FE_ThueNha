import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/userService";
import './CSS/login.css';
import * as Yup from "yup";

const InputSchema = Yup.object().shape({
    username: Yup.string()
        .required("Required"),
    password: Yup.string()
        .required("Required"),
})

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async (values) => {
        let dataLogin = await dispatch(login(values))
        checkLogin(dataLogin)
    }

    const checkLogin = (dataLogin) => {
        if (dataLogin.payload.mess) {
            alert('Login information is incorrect')
            localStorage.clear()

        } else {
            alert('Logged in successfully')
            navigate('/home')
        }
    }

    return (<>
        <div className="veen" id="background">
            <div className="wrapper">
                <Formik validationSchema={InputSchema} initialValues={{}} onSubmit={(values, {resetForm}) => {
                    handleLogin(values)
                    resetForm({
                        values: {
                            username: "", password: ""
                        }
                    })
                }}>
                    <Form id="login" tabIndex="500">
                        <h3>Login</h3>
                        <div className="mail">
                            <Field type="text" name={'username'}/>
                            <label>Mail or Username</label>
                        </div>
                        <div className="passwd">
                            <Field name={'password'} type="password"/>
                            <label>Password</label>
                        </div>
                        <div className="submit">
                            <button className="dark">Login</button>
                        </div>
                    </Form>
                </Formik>
                <div className="submit">
                    <p>Don't have an account?</p>
                    <Link to={'/'}>
                        <button className="dark">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}
export default Login;