import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cart: [],
    };

const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
