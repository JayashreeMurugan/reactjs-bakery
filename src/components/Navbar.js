import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>UrokodakiFoods</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/services">Services</Link></li>
        {/* <li><Link to="/satisfaction">Satisfaction</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
