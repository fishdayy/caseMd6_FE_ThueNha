import home2 from '../Image/home1.2.webp'
import home3 from '../Image/home1.3.webp'
import home4 from '../Image/home1.4.webp'
export function GetList() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="col-2 offset-md-1" style={{width: "322px", float: "left"}}>
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
                        <strong style={{textAlign: "left"}}>Th??nh ph??? Nha Trang, Vi???t Nam</strong>
                        <p style={{fontWeight: "200", textAlign: "left", marginBottom: "0"}}>H?????ng bi???n</p>
                        <p style={{fontWeight: "200", textAlign: "left", marginBottom: "0"}}>Ng??y 01 - Ng??y 06 th??ng
                            1</p>
                        <strong style={{textAlign: "left"}}> $1.132<label
                            style={{fontWeight: "200", marginLeft: "10px"}}> ????m</label></strong>
                    </div>
                </div>

            </div>
        </div>
    )
}