import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./style";
import { ContinueShoppingBtn } from "../item/ContinueShoppingBtn";

export const Canceled = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.canceledItem}>
        <h1 className={classes.h1}>Payment failed</h1>
      </Grid>
      <Grid item className={classes.item}>
        <p>Payment was not successful</p>
      </Grid>
      <Grid item className={classes.item}>
        <div className={classes.btn}>
          <ContinueShoppingBtn />
        </div>
      </Grid>
    </Grid>
  );
};
