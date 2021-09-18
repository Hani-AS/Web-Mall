import { Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

export const ShowCartBtn = ({ classes, Link }) => {
  return (
    <Button
      className={classes.showCartBtn}
      variant="contained"
      component={Link}
      to="/cart"
    >
      <Typography
        className={classes.showCartText}
        variant="button"
        component="p"
      >
        SHOW CART
      </Typography>
      <ShoppingCartIcon className={classes.showCartIcon} />
    </Button>
  );
};
