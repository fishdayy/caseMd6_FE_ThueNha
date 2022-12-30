import '../page/CSS/login.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showHomesByAddress, showHomesByCategory, showListHome} from "../service/homeService";
import {showCategories} from "../service/categoryService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {DateRange} from 'react-date-range';
import {useState} from 'react'
import {format} from "date-fns"


const Search = () => {
    const [openDate,setOpenDate] = useState(format)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const dataCategory = useSelector(state => {
        return state.category.listCategory
    })
    console.log(dataCategory)
    useEffect(() => {
        (async () => {
            await dispatch(showCategories())
        })()
    }, [])
    if (dataCategory.length == 0) {
        return <div>1</div>
    }


    return (
        <div className="container"
             style={{
                 borderRadius: "25px",
                 boxShadow: "0px 1px 25px 0px rgba(193,193,193,1)",
                 marginBottom: "50px",
                 height: "130px"
             }}>
            <ul className="nav nav-pills mb-3  nav-pills-flex">
                <li className="nav-item" role="presentation" style={{marginTop: "10px"}}>
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-home" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color: "black"}} onClick={() => {
                                    dispatch(showHomesByCategory(dataCategory[0].id))
                                    navigate('/home/homes-by-category')
                                }}>
                                    {dataCategory[0].name}
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation" style={{marginTop: "10px"}}>
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-dungeon" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color: "black"}} onClick={() => {
                                    dispatch(showHomesByCategory(dataCategory[1].id))
                                    navigate('/home/homes-by-category')
                                }}>
                                    {dataCategory[1].name}
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation" style={{marginTop: "10px"}}>
                    <button className="nav-link pills-home-tab" id="pills-home-tab" data-bs-toggle="#pills-home"
                            role="tab" aria-controls="pills-home">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-hotel" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <strong style={{color: "black"}} onClick={() => {
                                    dispatch(showHomesByCategory(dataCategory[2].id))
                                    navigate('/home/homes-by-category')
                                }}>
                                    {dataCategory[2].name}
                                </strong>
                            </div>
                        </div>
                    </button>
                </li>

            </ul>
            {/*<ul className="nav nav-pills mb-3  nav-pills-flex">*/}
            {/*    <Formik initialValues={{address: "", bedroom: "", bathroom: "", price: ""}} onSubmit={(values) => {*/}
            {/*        console.log(values)*/}
            {/*        dispatch(showHomesByAddress(values))*/}
            {/*        navigate('/home/homes-find')*/}
            {/*    }}>*/}
            {/*        <Form className="nav nav-pills mb-3  nav-pills-flex" style={{width: "100%"}}>*/}
            {/*            <div style={{*/}
            {/*                display: "flex",*/}
            {/*                width: "25%",*/}
            {/*                alignItems: "center",*/}
            {/*                marginRight: "3%",*/}
            {/*                border: "1px solid",*/}
            {/*                borderRadius: "5px"*/}
            {/*            }}>*/}
            {/*                <i className="fa-solid fa-magnifying-glass" style={{padding: "0 10px"}}></i>*/}
            {/*                <Field type="text" placeholder="Where are you going?" className="text-search"*/}
            {/*                       style={{border: "none", marginRight: "5px"}}/>*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                display: "flex",*/}
            {/*                width: "25%",*/}
            {/*                alignItems: "center",*/}
            {/*                border: "1px solid",*/}
            {/*                marginRight: "3%",*/}
            {/*                borderRadius: "5px"*/}
            {/*            }}>*/}
            {/*                <i className="fa-solid fa-calendar-days" style={{padding: "0 10px"}}></i>*/}
            {/*                <span onClick={()=>setOpenDate(!openDate)} className="text-search"*/}
            {/*                      style={{marginRight: "10px"}}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>*/}
            {/*                {openDate && <DateRange*/}
            {/*                    editableDateInputs={true}*/}
            {/*                    onChange={item => setDate([item.selection])}*/}
            {/*                    moveRangeOnFirstSelection={false}*/}
            {/*                    ranges={date}*/}
            {/*                    className="date"*/}
            {/*                />}*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                display: "flex",*/}
            {/*                width: "25%",*/}
            {/*                alignItems: "center",*/}
            {/*                border: "1px solid",*/}
            {/*                marginRight: "3%",*/}
            {/*                borderRadius: "5px"*/}
            {/*            }}>*/}
            {/*                <i className="fa-solid fa-people-group" style={{padding: "0 10px"}}></i>*/}
            {/*                <span className="text-search" style={{marginRight: "10px"}}>1 bathroom, 1 bedroom</span>*/}
            {/*            </div>*/}
            {/*            <div style={{display: "flex", width: "5%", alignItems: "center", marginLeft: "5%"}}>*/}
            {/*                <button className="btn btn-danger" type="submit" style={{marginLeft: "10px"}}>Search*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </Form>*/}
            {/*    </Formik>*/}
            {/*</ul>*/}
        </div>
    )
}
export default Search;