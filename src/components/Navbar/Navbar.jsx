import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, signoutUser } = useContext(AuthContext); {/*user er vitor registration er sob info ache*/ }
    console.log(user);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {
            user && user.email ? "" : (<li><NavLink to="/register">Register</NavLink></li>)
        }
    </>
    return (
        <div className="navbar shadow-sm  text-white bg-gray-800 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow text-black"
                    >
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.email ?
                        <div className='md:flex mr-[8vw] md:w-[10vw]'>
                            <div className='mt-3 mr-3'>
                                <p className='text-green-600 font-bold relative'>{user.displayName}</p>
                            </div>
                            <div className='mt-3'>
                                <img className='md:w-[5vw] md:h-[8vh] rounded-full relative' src={user.photoURL} alt="" />
                            </div>
                        </div> : ""
                }
                {
                    user && user.email ? (<Link to="/login" onClick={signoutUser} className='btn btn-primary relative'>Logout</Link>) : (<Link to="/login" className='btn btn-primary relative'>Login</Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;