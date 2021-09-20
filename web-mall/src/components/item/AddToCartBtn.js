import React from "react";
import { Button, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStyles } from "./style";

export const AddToCartBtn = ({ item, dispatch }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.cardBtn}
      variant="contained"
      onClick={() => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      }}
    >
      <Typography className={classes.cartText} variant="button" component="div">
        ADD TO CART
      </Typography>
      <AddShoppingCartIcon />
    </Button>
  );
};
