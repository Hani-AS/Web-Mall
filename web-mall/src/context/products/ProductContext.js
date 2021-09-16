import React, { createContext, useEffect, useState } from "react";

// Initial state
const initialState = [];

// create context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

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
        //             setAlert("There is no such city, please try again!");
        //   setTimeout(() => {
        //     setAlert("");
        //   }, 3000);
        // }
      }
    })();
  };

  useEffect(() => {
    fetchCategory("ALL");
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, fetchCategory, isLoading, setIsLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
};
