import { Button, Typography } from "@material-ui/core";
import React from "react";

export const ContinueShoppingBtn = ({ classes, handleClick }) => {
  return (
    <Button
      className={classes.BtnSecondary}
      variant="contained"
      onClick={handleClick}
    >
      <Typography className={classes.cartText} variant="button" component="p">
        CONTINUE SHOPPING
      </Typography>
    </Button>
  );
};
