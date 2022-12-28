import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../service/userService";
import './CSS/login.css'

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
            <div className="veen" id="background">
                <div className="wrapper">
                    <form id="login" tabIndex="500">
                        <h3>Register</h3>
                        <div className="mail">
                            <input type="mail" name=""/>
                            <label>Mail or Username</label>
                        </div>
                        <div className="passwd">
                            <input type="password" name=""/>
                            <label>Password</label>
                        </div>
                        {/*<div className="passwd">*/}
                        {/*    <input type="password" name=""/>*/}
                        {/*    <label>Re-Password</label>*/}
                        {/*</div>*/}
                        <div className="submit">
                            <button className="dark">Submit</button>
                        </div>
                        <div className="submit">
                            <p>Already an user?</p>
                            <button className="dark">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;