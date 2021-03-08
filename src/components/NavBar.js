import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/photos/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/photos/coffee'>Coffee</NavLink></li>
                <li><NavLink to='/photos/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;