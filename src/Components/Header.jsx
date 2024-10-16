import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="navbarBrand">
        <NavLink to="/" className="RouterNavLink">
          <a href="#">React Router</a>
        </NavLink>
      </div>
      <div className="listItems">
        {/* By using NavLink a class (active) 
        will be added into <NavLink />  */}

        <NavLink to="/" className="RouterNavLink">
          Home
        </NavLink>
        <NavLink to="/news" className="RouterNavLink">
          News
        </NavLink>
        <NavLink to="/contact" className="RouterNavLink">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
