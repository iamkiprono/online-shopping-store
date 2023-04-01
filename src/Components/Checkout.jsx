import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

const Checkout = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>

            <h3>${item.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
