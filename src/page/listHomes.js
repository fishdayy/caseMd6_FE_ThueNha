import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showListHome} from "../service/homeService";

const ListHome = () => {
    let dataHome = useSelector(state => {
        return state.home.listHome
    })

    console.log(dataHome)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showListHome())
    }, [])

    return (
        <div>
            {dataHome.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )
};

export default ListHome;