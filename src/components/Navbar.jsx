import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from '../assets/svg/favicon.ico';

function Navbar() {
    return (
        <div className='navbar_container'>
            <Link to='/' className='navbar_link_logo'>
                <img src={Logo} alt='logo' className='navbar_logo' />
            </Link>
            <SearchBar />
        </div>
    );
}

export default Navbar;
