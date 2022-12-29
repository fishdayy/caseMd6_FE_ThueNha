import React from 'react';
import {useSelector} from "react-redux";
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";


const Home = () => {
    const userNow = useSelector(state => {
        return state.user
    })
    return (
        <>
            <Navbar/>
            <Banner/>
            <Search/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Home;