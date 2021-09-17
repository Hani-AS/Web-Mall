import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import StoreIcon from "@material-ui/icons/Store";
import { useStyles } from "./styles";
import { Search } from "./Search";
import { CartState } from "../../context/cart/CartContext";

export default function ButtonAppBar() {
  const {
    state: { cart },
  } = CartState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <StoreIcon />
            Web Mall
          </Typography>
          <Search />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
