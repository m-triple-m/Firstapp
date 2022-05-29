import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const CartDetails = () => {
  const { cart } = useContext(UserContext);

  const displayCart = () => {
    return cart.map((item) => <li className="list-group-item">{item}</li>);
  };

  return (
    <div className="container">
      <h1>Cart Details</h1>
      <ul className="list-group">{displayCart()}</ul>
    </div>
  );
};

export default CartDetails;
