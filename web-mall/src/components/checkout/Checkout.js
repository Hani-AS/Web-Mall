import React from "react";
import { CartState } from "../../context/cart/CartContext";

export const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return <div></div>;
};
