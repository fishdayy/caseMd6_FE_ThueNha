import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showImagesByHomeId, showListImage} from "../service/imageService";
import {useParams} from "react-router-dom";
import {showHome} from "../service/homeService";
import './CSS/detail.css'

const Detail = () => {

    const dispatch = useDispatch()

    let {id} = useParams()

    let dataImage = useSelector(state => {
        return state.image.listImage
    })

    let dataHome = useSelector(state => {
        return state.home.listHome
    })

    console.log(dataHome)

    console.log(dataImage)

    useEffect(() => {
        (async () => {
            await dispatch(showHome(id))
            await dispatch(showImagesByHomeId(id))
        })()
    }, [])

    // return (
    //     <div className="row">
    //         <div className="col-12">
    //             <div className="col-6 offset-md-1" style={{width: "322px"}}>
    //                 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
    //                      style={{width: "322px", height: "306px"}}>
    //                     <div className="carousel-inner">
    //                         {dataImage.map(item => (
    //                             <div className="carousel-item active">
    //                                 <img className="d-block w-100" src={item.image}
    //                                      style={{width: "322px", height: "306px", borderRadius: "20px"}}/>
    //                             </div>
    //                         ))}
    //                     </div>
    //
    //                 </div>
    //                 <div>
    //                     <strong style={{textAlign: "left"}}>{dataHome[0] && dataHome[0].name}</strong>
    //                     <p style={{
    //                         fontWeight: "200",
    //                         textAlign: "left",
    //                         marginBottom: "0"
    //                     }}>{dataHome[0] && dataHome[0].categoryId}</p>
    //                     <p style={{
    //                         fontWeight: "200",
    //                         textAlign: "left",
    //                         marginBottom: "0"
    //                     }}>{dataHome[0] && dataHome[0].address}</p>
    //                     <strong style={{textAlign: "left"}}>{dataHome[0] && dataHome[0].price}$<label
    //                         style={{fontWeight: "200", marginLeft: "10px"}}>/ Day</label></strong>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div>
            <div id="imageDetail" style={{display: "flex"}}>
                {dataImage.map(item => (
                    <div style={{float: "left"}}>
                        <img src={item.image}
                             style={{width: "507px", height: "240px"}}
                        />
                    </div>
                ))}
            </div>
            <div className="gray-simple pt-4">
                <div className="container-fluid container-fluid-tab"
                     style={{
                         backgroundColor: "transparent",
                         display: "flex",
                         float: "left",
                     }}>
                    <div className="container" id="overview">
                        <div className="row" style={{background: "#fff", margin: "0", display: "flex"}}>
                            <div className="col-md-8" style={{boxSizing: "border-box", display: "block", width: "70%"}}>
                                <ul className="flex-tab" style={{width: "60%"}}>
                                    <li><a href="" className="overview1 active_1-1"
                                           style={{color: "rgb(57, 70, 109)"}}>Tổng quan</a></li>
                                    <li><a href="" style={{color: "rgb(57, 70, 109)"}}>Thư viện ảnh</a></li>
                                    <li><a href="" style={{color: "rgb(57, 70, 109)"}}>Đánh giá</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4" style={{width: "30%"}}>
                                <div className="flex-tab-color-price">
                                    <strong>Chỉ từ <small>2.520.000 <sup>đ</sup> /đêm</small></strong>
                                    <button className="btn btn-success" style={{borderRadius:"0px"}} type="submit"
                                    >Đặt ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>Oriental Sail Hạ Long 2 ngày 1 đêm</h3>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-location-pin" style={{color: "black", padding: "0 13px"}}></i>
                            <div className="nav-link-strong">
                                <p style={{color: "black"}}>
                                    Phường Tuần Châu - Thành phố Hạ Long - Tỉnh Quảng Ninh
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-home" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <p style={{color: "black"}}>
                                    Hotel
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-sink" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <p style={{color: "black"}}>
                                    2 Bathroom
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-bed" style={{color: "black", padding: "0 8px"}}></i>
                            <div className="nav-link-strong">
                                <p style={{color: "black"}}>
                                    3 Bedroom
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <i className="fa-solid fa-square-check" style={{color: "black", padding: "0 10px"}}></i>
                            <div className="nav-link-strong">
                                <p style={{color: "black"}}>
                                    Còn phòng
                                </p>
                            </div>
                        </div>
                        <div className="price">
                            <strong>Chỉ từ <small>2.520.000<sup>$</sup> / Day</small></strong>
                        </div>
                    </div>
                    <div className="description">
                        <strong>Description</strong>
                        <p>{dataHome[0] && dataHome[0].description}</p>
                    </div>
                    <div className="storeImage" style={{marginTop: "20px"}}>
                        <div className="row">
                            <strong className="col-12">Photo Library</strong>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{display:"flex", flexWrap: "wrap"}}>
                                {dataImage.map(image => (
                                    <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                        <img className="" src={image.image}
                                             style={{width: "100%", height: "100%"}}
                                             alt="First slide"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="" style={{marginTop: "40px"}}>
                        <div className="property_block_wrap style-2 ">
                            <div className="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#cMap" data-bs-target="#cMap"
                                   aria-controls="cMap" href="javascript:void(0);" aria-expanded="true">
                                    <h4 id="maptab" className="property_block_title fit-h5 container_scroll">Map</h4>
                                </a>
                            </div>
                            <div id="cMap" className="panel-collapse collapse show">
                                <div className="block-body  fit-h5-img">
                                    <iframe width="100%" height="400px"
                                            src="https://maps.google.com/maps?q=,20.922882921199644&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment" style={{marginTop: "20px"}}>
                        <strong>Comment</strong>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;