import React from "react";
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import profile_info from '../../assets/data/profile_info';

const NavBar = () => {
    const currentPage = useLocation();
    return (
        <div className="nav-bar">
            <div className="nav-list">
                {profile_info.navItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className =  {currentPage.pathname === item.path ? 'active' : ''}>
                                   {item.label}
                            </Link>  
                        </li>)
                })}
            </div>  
        </div>
    )
}

export default NavBar;