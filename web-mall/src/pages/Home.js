import React, { useContext } from "react";
import { ProductContext } from "../context/products/ProductContext";
import { Categories } from "../components/categories/Categories";
import { ProductCard } from "../components/cards/ProductCard";
import { Alert, Grid } from "@mui/material";

export const Home = () => {
  const { alert } = useContext(ProductContext);
  return (
    <>
      <Categories />
      {alert ? (
        <Grid container direction="row" justifyContent="center">
          <Alert severity="error">{alert} — please refresh the page!</Alert>
        </Grid>
      ) : (
        <ProductCard />
      )}
    </>
  );
};
