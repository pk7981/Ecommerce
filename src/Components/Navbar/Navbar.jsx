import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ cartItems }) => {
    const totalItems = cartItems.length;

    return (
        <nav>
            <Link to="/">Ecommerce</Link>
            <input type="text" placeholder='Search prducts. . . .'/>
            <Link to="/cart">Cart ({totalItems})</Link>
        </nav>
    );
};

export default Navbar;
