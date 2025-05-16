import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/main.scss'; // Adjusted path assumption

const Header = () => (
  <header id="header">
    <h1><Link to="/">Keagan Chasenski</Link></h1> {/* Site Title */}
    <nav className="links">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/stats">Stats</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <nav className="main">
      <ul>
        {/* The _header.scss includes styles for a search icon and a menu icon.
            This is a placeholder for the menu icon (hamburger).
            You would typically add an onClick handler here to toggle a mobile menu.
            The class "fa-bars" assumes you are using Font Awesome. */}
        <li className="menu">
          <a className="fa-bars" href="#menu">Menu</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
