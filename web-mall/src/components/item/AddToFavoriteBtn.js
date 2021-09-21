import React, { useContext } from "react";
import { ProductContext } from "../../context/products/ProductContext";
import { Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useStyles } from "./style";

export const AddToFavoriteBtn = ({ item }) => {
  const {
    favoriteListDispatch,
    favoriteListState: { favoriteList },
  } = useContext(ProductContext);
  const inList = favoriteList.some((product) => product.id === item.id);
  const classes = useStyles();
  return (
    <Button
      className={classes.BtnSecondary}
      variant="outlined"
      disabled={inList && true}
      onClick={() => {
        favoriteListDispatch({ type: "ADD_TO_LIST", payload: item });
      }}
    >
      <Typography className={classes.cartText} variant="button" component="div">
        {inList ? "Added to favorite" : "Add to favorite"}
      </Typography>
      <FavoriteBorderIcon />
    </Button>
  );
};
