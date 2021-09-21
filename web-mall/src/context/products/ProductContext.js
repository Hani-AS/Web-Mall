import React, { createContext, useEffect, useReducer, useState } from "react";
import { favoriteListReducer } from "../reducers/FavoriteReducer";

// Initial state product list
const initialState = [];

// Initial state favorite list
const initialStateFavoriteList = localStorage.getItem("favoriteList")
  ? JSON.parse(localStorage.getItem("favoriteList"))
  : {
      favoriteList: [],
    };

// create context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");

  const [favoriteListState, favoriteListDispatch] = useReducer(
    favoriteListReducer,
    initialStateFavoriteList
  );

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteListState));
  }, [favoriteListState]);

  const fetchCategory = (category) => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          category === "ALL"
            ? "https://fakestoreapi.com/products?limit=12"
            : `https://fakestoreapi.com/products/category/${category.toLowerCase()}`
        );
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setIsLoading(false);
        } else {
          throw new Error(response.status, response.statusText);
        }
      } catch (error) {
        setAlert(error.message);
        setIsLoading(false);
        setTimeout(() => {
          setAlert("");
        }, 6000);
      }
    })();
  };

  useEffect(() => {
    fetchCategory("ALL");
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchCategory,
        isLoading,
        setIsLoading,
        alert,
        favoriteListState,
        favoriteListDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
