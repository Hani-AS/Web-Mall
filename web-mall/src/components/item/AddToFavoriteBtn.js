import { Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { useStyles } from "./style";

export const AddToFavoriteBtn = () => {
  const classes = useStyles();
  return (
    <Button className={classes.BtnSecondary} variant="contained">
      <Typography className={classes.cartText} variant="button" component="p">
        ADD TO FAVORITE
      </Typography>
      <FavoriteBorderIcon />
    </Button>
  );
};
