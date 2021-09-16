import React from "react";
import { Categories } from "../components/categories/Categories";
import { ProductCard } from "../components/cards/ProductCard";
import { CartState } from "../context/cart/CartContext";

export const Home = () => {
  const { state } = CartState();
  console.log(state);
  return (
    <>
      <Categories />
      <ProductCard />
    </>
  );
};
