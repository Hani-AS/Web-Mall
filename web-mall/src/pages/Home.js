import React from "react";
import { Categories } from "../components/categories/Categories";
import { ProductCard } from "../components/cards/ProductCard";

export const Home = () => {
  return (
    <>
      <Categories />
      <ProductCard />
    </>
  );
};
