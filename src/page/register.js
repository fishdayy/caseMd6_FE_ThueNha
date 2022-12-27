import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../service/userService";
import {Link, useNavigate} from "react-router-dom";
import './CSS/login.css';
import * as Yup from "yup";

const InputSchema = Yup.object().shape({
    username: Yup.string()
        .required("Required"),
    password: Yup.string()
        .required("Required"),
})

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
            alert('Account already exists')
        } else {
            alert('Successful account registration')
            navigate('/login')
        }
    }
    return (
        <div>
            <div className="veen" id="background">
                <div className="wrapper">
                    <Formik validationSchema={InputSchema} initialValues={{}} onSubmit={(values, {resetForm}) => {
                        handleRegister(values)
                        resetForm({
                            values: {
                                username: "",
                                password: ""
                            }
                        })
                    }}>
                        <Form id="login" tabIndex="500">
                            <h3>Register</h3>
                            <div className="mail">
                                <Field name={'username'} type="text"/>
                                <label>Mail or Username</label>
                            </div>
                            <div className="passwd">
                                <Field name={'password'} type="password"/>
                                <label>Password</label>
                            </div>
                            <div className="submit">
                                <button className="dark">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                    <div className="submit">
                        <p>Already an user?</p>
                        <Link to={'/login'}>
                            <button className="dark">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;