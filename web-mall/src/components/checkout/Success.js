import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { CartState } from "../../context/cart/CartContext";
import { ContinueShoppingBtn } from "../item/ContinueShoppingBtn";
import { useStyles } from "./style";

export const Success = () => {
  const { dispatch } = CartState();
  const classes = useStyles();

  useEffect(() => {
    dispatch({
      type: "CLEAR_CART",
    });
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.canceledItem}>
        <h1 className={classes.h1}>Thank you for your order</h1>
      </Grid>
      <Grid item className={classes.item}>
        <p>
          We are currently processing your order and will send you a
          confirmation email shortly.
        </p>
      </Grid>
      <Grid item className={classes.item}>
        <div className={classes.btn}>
          <ContinueShoppingBtn />
        </div>
      </Grid>
    </Grid>
  );
};
