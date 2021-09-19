import React, { useEffect } from "react";
import { CartState } from "../../context/cart/CartContext";
import { ContinueShoppingBtn } from "../item/ContinueShoppingBtn";

export const Success = () => {
  const { dispatch } = CartState();

  useEffect(() => {
    dispatch({
      type: "CLEAR_CART",
    });
  }, []);

  return (
    <div>
      <h1>Thank you for your order</h1>
      <p>
        We are currently processing your order and will send you a confirmation
        email shortly.
      </p>
      <ContinueShoppingBtn />
    </div>
  );
};
