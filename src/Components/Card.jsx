import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Card = ({ title, image, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <h3>${price}</h3>
      <p>{description}</p>
      <div className="btn">
        <FiShoppingCart />
      </div>
    </div>
  );
};

export default Card;
