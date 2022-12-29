import '../page/CSS/login.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showHomesByAddress, showHomesByCategory, showListHome} from "../service/homeService";
import {showCategories} from "../service/categoryService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

const Search = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dataCategory = useSelector(state => {
        return state.category.listCategory
    })

    useEffect(() => {
        (async () => {
            await dispatch(showCategories())
        })()
    }, [])

    return (
        <div className="container"
             style={{borderRadius: "25px", boxShadow: "0px 1px 25px 0px rgba(193,193,193,1)", marginBottom: "50px"}}>
            <ul className="nav nav-pills mb-3  nav-pills-flex">
                {dataCategory.map(item => (
                    <li className="nav-item" role="presentation">
                        <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                                role="tab" aria-controls="pills-home">
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i className="fa-solid fa-home" style={{color: "black", padding: "0 10px"}}></i>
                                <div className="nav-link-strong">
                                    <strong style={{color: "black"}} onClick={() => {
                                        dispatch(showHomesByCategory(item.id))
                                        navigate('/home/homes-by-category')
                                    }}>
                                        {item.name}
                                    </strong>
                                </div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
            <ul className="nav nav-pills mb-3  nav-pills-flex">
                <Formik initialValues={{address: "", bedroom: "", bathroom: "", price: ""}} onSubmit={(values) => {
                    console.log(values)
                    dispatch(showHomesByAddress(values))
                    navigate('/home/homes-find')
                }}>
                    <Form>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-magnifying-glass" style={{padding: "0 10px"}}></i>
                            <Field type="text" name={"address"} placeholder="Where are you going?"
                                   className="text-search"/>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-magnifying-glass" style={{padding: "0 10px"}}></i>
                            <Field type="text" name={"price"} placeholder="Price?"
                                   className="text-search"/>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-people-group" style={{padding: "0 10px"}}></i>
                            <Field as="select" name={"bedroom"} type="number">
                                    <option value={""}>Bedroom</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                            </Field>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-people-group" style={{padding: "0 10px"}}></i>
                            <Field as="select" name={"bathroom"} type="number">
                                <option value={""}>Bathroom</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </Field>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <button className="btn btn-outline-success" type="submit"
                                    style={{marginLeft: "10px"}}>Search
                            </button>
                        </div>
                    </Form>
                </Formik>
            </ul>
        </div>
    )
}
export default Search;