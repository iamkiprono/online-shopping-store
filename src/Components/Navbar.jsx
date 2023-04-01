import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
       <h3><Link to={'/'}>ShopLI</Link> </h3>
        <div className="navlinks">
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/checkout'}><FiShoppingCart/><span>0</span></NavLink></li>
            </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
