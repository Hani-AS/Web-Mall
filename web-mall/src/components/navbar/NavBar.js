import React from "react";
import { Link, useHistory } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import { useStyles } from "./styles";
import { CartState } from "../../context/cart/CartContext";
import { FavoriteDrawer } from "./drawer/FavoriteDrawer";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
} from "@material-ui/core";

export const NavBar = () => {
  const {
    state: { cart },
  } = CartState();
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Button className={classes.BtnSecondary} onClick={handleClick}>
            <Typography variant="h6" className={classes.title}>
              <StoreIcon />
              Web Mall
            </Typography>
          </Button>
          <div className={classes.sectionDesktop}>
            <FavoriteDrawer />
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                badgeContent={cart.length}
                color="error"
                className={classes.cartIcon}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
