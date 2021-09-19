import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { CartState } from "../../context/cart/CartContext";
import { ContinueShoppingBtn } from "../item/ContinueShoppingBtn";

export const Success = () => {
  const { dispatch } = CartState();

  useEffect(() => {
    dispatch({
      type: "CLEAR_CART",
    });
  }, []);

  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Thank you for your order</h1>
      <p>
        We are currently processing your order and will send you a confirmation
        email shortly.
      </p>
      {/* <ContinueShoppingBtn {...{ handleClick }} /> */}
    </div>
  );
};
