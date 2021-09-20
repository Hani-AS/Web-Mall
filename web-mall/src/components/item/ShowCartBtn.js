import { Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { useStyles } from "./style";

export const ShowCartBtn = ({ Link }) => {
  const classes = useStyles();
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
        component="div"
      >
        SHOW CART
      </Typography>
      <ShoppingCartIcon className={classes.showCartIcon} />
    </Button>
  );
};
