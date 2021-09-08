import React, { createContext, useEffect, useState } from "react";

// Initial state
const initialState = [];

// create context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialState);

  const fetchCategory = (category) => {
    (async () => {
      try {
        const response = await fetch(
          category === "ALL"
            ? "https://fakestoreapi.com/products?limit=12"
            : `https://fakestoreapi.com/products/category/${category.toLowerCase()}`
        );
        console.log(category);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error();
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
    <ProductContext.Provider value={{ products, setProducts, fetchCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
