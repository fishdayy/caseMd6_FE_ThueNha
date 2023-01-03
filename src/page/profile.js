import './CSS/profile.css';
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {changePassword, updateProfile} from "../service/userService";
import * as Yup from "yup";
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InputSchema = Yup.object().shape({
    fullName: Yup.string()
        .required("Please Enter Your Name!"),
    job: Yup.string()
        .required("Please Enter Your Job!"),
    address: Yup.string()
        .required("Please Enter Your Address!"),
    phone: Yup.string()
        .min(10, "Too Short!")
        .max(10, "Too Long")
        .required("Please Enter Your Phone!"),
})

const Profile = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector(state => {
        console.log(state)
        return state.user.userNow
    })

    let userId

    if (user) {
        userId = user.userFind[0].id;
    }
    const dispatch = useDispatch();
    return (
        <div style={{backgroundColor: "white", marginTop: '10px'}}>
            <div className="container">
                <div className="main-body" style={{boxShadow: "0px 1px 25px 0px rgba(193,193,193,1)",borderRadius:"15px"}}>
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Your Profile</li>
                        </ol>
                    </nav>
                    <hr/>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3" style={{width: "30%"}}>
                            <div className="card"
                                 style={{boxShadow: "0px 1px 5px 0px rgba(193,193,193,1)", borderRadius: "10px"}}>
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                             className="rounded-circle" width="150"></img>
                                        <div className="mt-3">
                                            <h4>{user && user.userFind[0].fullName}</h4>
                                            <p className="text-secondary mb-1">Your
                                                Job: {user && user.userFind[0].job}</p>
                                            <p className="text-muted font-size-sm">Your
                                                Address: {user && user.userFind[0].address}</p>
                                        </div>

                                        <Button variant="primary" style={{backgroundColor: "#dc3545",borderColor:"#dc3545"}} onClick={handleShow}>
                                            Change Password
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Change Password</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Formik initialValues={{oldPassword: "", newPassword: ""}}
                                                        onSubmit={async (values, {resetForm}) => {
                                                            let data = {
                                                                id: userId,
                                                                oldPassword: values.oldPassword,
                                                                newPassword: values.newPassword
                                                            }
                                                            let check = await dispatch(changePassword(data))
                                                            console.log(check)
                                                            if (check.payload.user.check) {
                                                                alert(check.payload.mess)
                                                                handleClose()
                                                                resetForm()
                                                            } else {
                                                                alert(check.payload.mess)
                                                                resetForm()
                                                            }
                                                        }}>
                                                    <Form>
                                                        <Field
                                                            required
                                                            name="oldPassword"
                                                            type="text"
                                                            placeholder="Old Password"
                                                            style={{borderRadius:"10px"}}

                                                        />
                                                        <br/>
                                                        <Field
                                                            required
                                                            name="newPassword"
                                                            type="text"
                                                            placeholder="New Password"
                                                            style={{marginTop:"10px",borderRadius:"10px"}}
                                                        />

                                                        <Modal.Footer>
                                                            <Button variant="secondary" style={{backgroundColor:"#dc3545",borderColor:"#dc3545"}} onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                            <Button variant="primary" type={"submit"}>
                                                                Save Changes
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Form>
                                                </Formik>
                                            </Modal.Body>

                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8" style={{width: "70%",}}>
                            <div className="card mb-3"
                                 style={{boxShadow: "0px 1px 5px 0px rgba(193,193,193,1)", borderRadius: "10px"}}>
                                <div className="card-body">
                                    <Formik validationSchema={InputSchema} initialValues={{
                                        fullName: "",
                                        job: "",
                                        phone: "",
                                        address: ""
                                    }} onSubmit={(values) => {
                                        let data = {
                                            id: userId,
                                            newFullName: values.fullName,
                                            newJob: values.job,
                                            newPhone: values.phone,
                                            newAddress: values.address
                                        }
                                        dispatch(updateProfile(data))
                                        alert("Updated!")
                                    }}>
                                        <Form>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0" style={{color: "red"}}>Full Name</h6>
                                                </div>
                                                <Field className="col-sm-8 text-secondary" name="fullName" style={{borderRadius: "10px"}}
                                                       placeholder={user && user.userFind[0].fullName}>
                                                </Field>
                                                <ErrorMessage name="fullName" component="div"
                                                              style={{color: "red"}}></ErrorMessage>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0" style={{color: "red"}}>Job</h6>
                                                </div>
                                                <Field className="col-sm-8 text-secondary" name="job" style={{borderRadius: "10px"}}
                                                       placeholder={user && user.userFind[0].job}>
                                                </Field>
                                                <ErrorMessage name="job" component="div"
                                                              style={{color: "red"}}></ErrorMessage>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0" style={{color: "red"}}>Phone</h6>
                                                </div>
                                                <Field type="number" className="col-sm-8 text-secondary" name="phone" style={{borderRadius: "10px"}}
                                                       placeholder={user && user.userFind[0].phone}>
                                                </Field>
                                                <ErrorMessage name="phone" component="div"
                                                              style={{color: "red"}}></ErrorMessage>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0" style={{color: "red"}}>Address</h6>
                                                </div>
                                                <Field className="col-sm-8 text-secondary" name="address" style={{borderRadius: "10px"}}
                                                       placeholder={user && user.userFind[0].address}>
                                                </Field>
                                                <ErrorMessage name="address" component="div"
                                                              style={{color: "red"}}></ErrorMessage>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-info "
                                                            style={{
                                                                backgroundColor: "#dc3545",
                                                                borderColor:"#dc3545",
                                                                color: "white",
                                                                borderRadius: "10px"
                                                            }}>Update
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile