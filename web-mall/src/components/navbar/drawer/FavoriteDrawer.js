import React, { useState, useContext } from "react";
import { ProductContext } from "../../../context/products/ProductContext";
import { useHistory } from "react-router";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./style";
import {
  Box,
  Drawer,
  List,
  Divider,
  Badge,
  IconButton,
  Button,
  ListItemAvatar,
  Avatar,
  Grid,
} from "@mui/material";

export const FavoriteDrawer = () => {
  const {
    favoriteListDispatch,
    favoriteListState: { favoriteList },
  } = useContext(ProductContext);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawer(open);
  };
  const classes = useStyles();

  const handleClearList = () => {
    favoriteListDispatch({ type: "CLEAR_LIST" });
    setDrawer(false);
  };

  const history = useHistory();
  const handleLinkToItem = (id) => {
    history.push(`/${id}`);
  };

  const list = () => (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {favoriteList.map((product) => (
          <div key={product.id}>
            <Grid container className={classes.drawerContainer}>
              <Grid item>
                <Button onClick={() => handleLinkToItem(product.id)}>
                  <ListItemAvatar className={classes.drawerAvatar}>
                    <Avatar alt={product.image} src={product.image} />
                  </ListItemAvatar>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.favDeleteButton}
                  onClick={() =>
                    favoriteListDispatch({
                      type: "REMOVE_FROM_LIST",
                      payload: product,
                    })
                  }
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
            <Divider />
          </div>
        ))}
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={favoriteList.length} color="error">
          <FavoriteTwoToneIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
        {list()}
        <Button onClick={handleClearList} className={classes.clearListBtn}>
          clear list
        </Button>
      </Drawer>
    </>
  );
};
