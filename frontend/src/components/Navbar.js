import React from 'react';
import './Navbar.css';
import image from './logo.jpg'

const Navbar = ({ onCreateClick }) => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Find Jobs</li>
        <li>Find Talents</li>
        <li>About us</li>
        <li>Testimonials</li>
      </ul>
      <button className="create-btn" onClick={onCreateClick}>Create Jobs</button>
    </div>
  </nav>
);

export default Navbar;
