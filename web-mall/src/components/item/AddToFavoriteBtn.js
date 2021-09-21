import React, { useContext } from "react";
import { ProductContext } from "../../context/products/ProductContext";
import { Button, Typography } from "@material-ui/core";
import CheckIcon from "@mui/icons-material/Check";
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
        {inList ? <CheckIcon /> : "Add to favorite"}
      </Typography>
    </Button>
  );
};
