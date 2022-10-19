import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Contexts/UserContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <Link onClick={logOut}>Log Out</Link> : <><Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link></>}
                {user?.email}
            </div>
        </nav>
    );
};

export default Header;