import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import CartContext from "../CartContext";


const Card = ({ title, image, price, description }) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div className="card">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <h3>${price}</h3>
      <p>{description}</p>
      <div onClick={()=>addToCart(title, image, price)} className="btn">
        <FiShoppingCart />
      </div>
    </div>
  );
};

export default Card;
