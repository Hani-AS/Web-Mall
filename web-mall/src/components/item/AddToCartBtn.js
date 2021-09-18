import React from "react";
import { Button, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const AddToCartBtn = ({ classes, item, dispatch }) => {
  return (
    <Button
      className={classes.cardBtn}
      variant="contained"
      onClick={() => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      }}
    >
      <Typography className={classes.cartText} variant="button" component="p">
        ADD TO CART
      </Typography>
      <AddShoppingCartIcon />
    </Button>
  );
};
