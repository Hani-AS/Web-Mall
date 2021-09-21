import React from "react";
import { CartState } from "../../context/cart/CartContext";
import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { Grid, Typography } from "@material-ui/core";
import { CartItem } from "./CartItem";
import { CartTotal } from "./CartTotal";
import { List } from "@mui/material";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const invoiceTotal = total;
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <>
      {cart.length === 0 ? (
        <Grid container className={classes.emptyCart}>
          <Typography variant="h4" component="h4">
            Cart is empty!
          </Typography>
        </Grid>
      ) : (
        <Grid container className={classes.mainContainer}>
          <Grid item className={classes.itemContainer}>
            <List
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            >
              {cart.map((item) => (
                <CartItem
                  {...{ handleClick, history, item, classes, dispatch }}
                  key={item.id}
                />
              ))}
              <CartTotal {...{ invoiceTotal, classes }} />
            </List>
          </Grid>
        </Grid>
      )}
    </>
  );
};
