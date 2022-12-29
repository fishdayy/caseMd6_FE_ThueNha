import Navbar from "../components/NavBar";
import home1 from "./Image/home1.1.webp";
import home2 from "./Image/home1.2.webp";
import home3 from "./Image/home1.3.webp";
import home4 from "./Image/home1.4.webp";
import React from "react";
import './CSS/detail.css'

const DetailPost = () => {
    return (
        <div>
            <Navbar/>
            <div id="imageDetail" style={{display: "flex"}}>
                <div style={{float: "left"}}>
                    <img src={home2}
                         style={{width: "507px", height: "240px"}}
                    />
                </div>
                <div style={{float: "left"}}>
                    <img src={home3}
                         style={{width: "507px", height: "240px"}}
                    />
                </div>
                <div style={{float: "left"}}>
                    <img src={home4}
                         style={{width: "507px", height: "240px"}}
                    />
                </div>
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
                            <strong>Chỉ từ <small>2.520.000 <sup>đ</sup> /đêm</small></strong>
                        </div>
                    </div>
                    <div className="description">
                        <strong>Miêu tả</strong>
                        <p>Ngày 1: Cảng tàu khách quốc tế Hạ Long – Vịnh Hạ Long (Bữa trưa, bữa tối)<br/>
                            12h30 – 12h45 Từ Cảng tàu khách Quốc tế Hạ Long, Quý khách sẽ được đón bằng xuồng chuyển tải
                            để lên du thuyền Oriental Sails. Sau khi nghe hướng dẫn viên giới thiệu, quý khách nhận chìa
                            khóa phòng nghỉ của mình và quay trở lại nhà hàng để dùng bữa trưa.<br/>
                            13h00 – 15h30 Du thuyền nhổ neo rời bến để đi thăm quan. Xuyên qua hàng ngàn đảo đá kì thú
                            của vịnh, du thuyền sẽ dừng lại giữa trung tâm của vịnh để bắt đầu những hoạt động khám phá
                            Hạ Long kì ảo.<br/>
                            15h30 – 16h30 Du khách được hướng dẫn viên đưa đoàn thăm hang Sửng Sốt, một trong những hang
                            đá lớn nhất, đẹp nhất vịnh Hạ Long.<br/>
                            16h30 – 17h30 Quý khách trở lại tàu, thay quần áo bơi hoặc mặc trang phục phù hợp để đi
                            xuồng nhỏ lên tắm biển hoặc ngắm cảnh trên đảo Titov.<br/>
                            17h30 – 19h00 Trở lại du thuyền, lên sân thượng, thưởng thức những món đồ uống hấp dẫn với
                            chương trình “Giờ Vàng: Mua 02 tặng 01”, thư giãn và ngắm mặt trời lặn, tham gia trải nghiệm
                            nấu ăn cùng đầu bếp chuyên nghiệp.<br/>
                            19h00 Quý khách dùng bữa tối. Giao lưu với các khách hàng khác hoặc tham gia các chương
                            trình như câu mực, hát karaoke đến 22h00.
                            Nghỉ đêm trên du thuyền.<br/>
                            Ngày 2: Vịnh Hạ Long-Cảng tàu khách quốc tế Hạ Long (Bữa Sáng, Bữa trưa)<br/>
                            06h00 – 07h30 Bắt đầu một ngày mới với lớp học Thái Cực Quyền, ngắm mặt trời mọc, đắm mình
                            trong không khí trong lành của buổi sáng với ly café hay trà thật sảng khoái. Quý khách cũng
                            có thể ăn lót dạ với quầy tự chọn tại nhà hàng nếu thích.<br/>
                            7h30 – 9h00 Quý khách tập hợp để đi theo hướng dẫn viên lên xuồng nhỏ đi thăm Hang Luồn một
                            trong những hang nước xuyên qua lòng núi đá vôi để vào một giếng đá vôi đẹp như tranh vẽ.
                            Quý khách hãy lựa chọn đi bằng đò chèo tay của người địa phương hoặc tự chèo thuyền thể thao
                            kayak.<br/>
                            09h30 Đã đến giờ trả phòng, quý khách gửi hành lý và chìa khóa tại quầy lễ tân.<br/>
                            09h30 – 11h15 Du thuyền di chuyển về bờ. Quý khách thư giãn, khám phá phong cảnh và chụp
                            những bức cảnh kỷ niệm tuyệt đẹp về Hạ Long trước khi thưởng thức bữa trưa sớm.<br/>
                            11h30 Quý khách rời tàu tại Cảng tàu khách Quốc Tế Hạ Long.</p>
                    </div>
                    <div className="storeImage" style={{marginTop: "20px"}}>
                        <div className="row">
                            <strong className="col-12">Thư viện ảnh</strong>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{display:"flex", flexWrap: "wrap"}}>
                                <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                    <img className="" src={home1}
                                         style={{width: "100%", height: "100%"}}
                                         alt="First slide"/>
                                </div>
                                <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                    <img className="" src={home2}
                                         style={{width: "100%", height: "100%"}}
                                         alt="First slide"/>
                                </div>
                                <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                    <img className="" src={home3}
                                         style={{width: "100%", height: "100%"}}
                                         alt="First slide"/>
                                </div>
                                <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                    <img className="" src={home4}
                                         style={{width: "100%", height: "100%"}}
                                         alt="First slide"/>
                                </div>
                                <div className="col-3" style={{marginRight:"10px",marginBottom:"10px"}}>
                                    <img className="" src={home1}
                                         style={{width: "100%", height: "100%"}}
                                         alt="First slide"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{marginTop: "40px"}}>
                        <div className="property_block_wrap style-2 ">
                            <div className="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#cMap" data-bs-target="#cMap"
                                   aria-controls="cMap" href="javascript:void(0);" aria-expanded="true">
                                    <h4 id="maptab" className="property_block_title fit-h5 container_scroll">Bản đồ địa
                                        điểm</h4>
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
                        <strong>Bình luận & Đánh giá</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailPost