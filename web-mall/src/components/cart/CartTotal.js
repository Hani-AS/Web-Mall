import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import { StripeCheckout } from "../checkout/StripeCheckout";

export const CartTotal = ({ invoiceTotal, classes }) => {
  return (
    <ListItem>
      <Grid container className={classes.cartTotalContainer}>
        <Grid item>
          <Typography variant="h6" component="h1">
            Total: € {invoiceTotal}
          </Typography>
        </Grid>
        <Grid item>
          <StripeCheckout {...{ classes }} />
        </Grid>
      </Grid>
    </ListItem>
  );
};
