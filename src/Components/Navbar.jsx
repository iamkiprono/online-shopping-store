import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../CartContext";
import { useContext } from "react";

const Navbar = () => {
    const {items} = useContext(CartContext)
 
  return (
    <div className="navbar">
      <nav>
        <h3>
          <Link to={"/"}>ShopLI</Link>{" "}
        </h3>
        <div className="navlinks">
          <ul>
            <li>
              <NavLink to={"/"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/checkout"}>
                <FiShoppingCart />
                <span>{items.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
