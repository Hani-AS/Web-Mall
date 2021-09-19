import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { useStyles } from "./style";

export const ContinueShoppingBtn = () => {
  const history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    history.push("/");
  };

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
