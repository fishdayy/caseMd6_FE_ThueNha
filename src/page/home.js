import React from 'react';
import {useSelector} from "react-redux";
import home2 from './Image/home1.2.webp'
import home3 from './Image/home1.3.webp'
import home4 from './Image/home1.4.webp'
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Footer from "../components/Footer";


const Home = () => {
    const userNow = useSelector(state => {
        return state.user
    })
    return (
        <div style={{backgroundColor:"white"}}>
            <Navbar/>
            <Banner/>
            <Search/>

            <div className="row">
                <div className="col-12">
                    <div>
                        <h1 style={{textAlign:"center",color:"red"}}>Khám phá thêm địa điểm du lịch</h1>
                     <p style={{textAlign:"center", marginBottom:"50px"}}>
                         Những địa điểm lưu trú phổ biến được nhiều khách du lịch quan tâm và thường xuyên ghé thăm.
                     </p>
                    </div>
                    <div className="col-2 offset-md-1" style={{width: "322px",float:"left"}}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             style={{width: "322px", height: "306px"}}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={home2}
                                         style={{width: "322px", height: "306px", borderRadius: "20px"}}
                                         alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={home3}
                                         style={{width: "322px", height: "306px", borderRadius: "20px"}}
                                         alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={home4}
                                         style={{width: "322px", height: "306px", borderRadius: "20px"}}
                                         alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div>
                            <strong style={{textAlign: "left"}}>Thành phố Nha Trang, Việt Nam</strong>
                            <p style={{fontWeight: "200", textAlign: "left", marginBottom: "0"}}>Hướng biển</p>
                            <p style={{fontWeight: "200", textAlign: "left", marginBottom: "0"}}>Ngày 01 - Ngày 06 tháng
                                1</p>
                            <strong style={{textAlign: "left"}}> $1.132<label
                                style={{fontWeight: "200", marginLeft: "10px"}}> đêm</label></strong>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>


    );
};

export default Home;