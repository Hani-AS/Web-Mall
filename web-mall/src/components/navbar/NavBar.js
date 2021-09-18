import React from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import StoreIcon from "@mui/icons-material/Store";
import { useStyles } from "./styles";
import { Search } from "./Search";
import { CartState } from "../../context/cart/CartContext";
import { Button } from "@material-ui/core";

export default function ButtonAppBar() {
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
        <Toolbar>
          <Button className={classes.BtnSecondary} onClick={handleClick}>
            <Typography variant="h6" className={classes.title}>
              <StoreIcon />
              Web Mall
            </Typography>
          </Button>
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
