import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/userService";
import './CSS/login.css'
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

    return(
        <>
            <div className="veen" id='backgroundLogin'>
                <div className="wrapper">
                    <form id="login" tabIndex="500">
                        <h3>Login</h3>
                        <div className="mail">
                            <input type="mail" name=""/>
                                <label>Mail or Username</label>
                        </div>
                        <div className="passwd">
                            <input type="password" name=""/>
                                <label>Password</label>
                        </div>
                        <div className="submit">
                            <button className="dark">Login</button>
                        </div>
                        <div className="submit">
                            <p>Don't have an account?</p>
                            <button className="dark">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
)}
export default Login;