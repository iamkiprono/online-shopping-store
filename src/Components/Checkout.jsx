import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="checkout products">
            <div className="card">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>

              <h3>${item.price}</h3>
              <FaTrashAlt />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
