import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../Home/Home';

const Root = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div className={isHome ? 'home-bg' : ''}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;