import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showListHome} from "../service/homeService";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import Banner from "../components/Banner";

const ListHome = () => {
    let dataHome = useSelector(state => {
        console.log(state)
        return state.home.listHome
    })

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(showListHome())
        })()
    }, [])


    return (<div>
        <div>
            <Banner></Banner>
        </div>
        <div>
            <Search></Search>
        </div>
            <div className="row">
                <div className="col-12">{dataHome.map(item => (
                    <div className="col-2 offset-md-1" style={{width: "322px", float: "left"}}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             style={{width: "322px", height: "306px"}}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Link to={`/home/detail/${item.id}`}><img className="d-block w-100"
                                                                              src={item.avatar}
                                                                              style={{
                                                                                  width: "322px",
                                                                                  height: "306px",
                                                                                  borderRadius: "20px"
                                                                              }}
                                                                              alt="First slide"/></Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong style={{textAlign: "left"}}>{item.name}</strong>
                            <p style={{fontWeight: "200", textAlign: "left", marginBottom: "0"}}>{item.address}</p>
                            <strong style={{textAlign: "left"}}>{item.price}$<label
                                style={{fontWeight: "200", marginLeft: "10px"}}>/ Day</label></strong>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>)
};

export default ListHome;