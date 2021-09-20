import { Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { useStyles } from "./style";

export const AddToFavoriteBtn = () => {
  const classes = useStyles();
  return (
    <Button className={classes.BtnSecondary} variant="outlined">
      <Typography className={classes.cartText} variant="button" component="div">
        ADD TO FAVORITE
      </Typography>
      <FavoriteBorderIcon />
    </Button>
  );
};
