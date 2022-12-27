import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {
    const userNow = useSelector(state=>{
        return state.user
    })
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;