import { Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

export const AddToFavoriteBtn = ({ classes }) => {
  return (
    <Button className={classes.BtnSecondary} variant="contained">
      <Typography className={classes.cartText} variant="button" component="p">
        ADD TO FAVORITE
      </Typography>
      <FavoriteBorderIcon />
    </Button>
  );
};
