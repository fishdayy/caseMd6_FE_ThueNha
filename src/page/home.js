import React from 'react';
import {Link,Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
    const userNow = useSelector(state=>{
        return state.user
    })
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Home;