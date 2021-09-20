import { Button, Typography, Box } from "@material-ui/core";
import React from "react";

export const BackToItemBtn = ({ item, handleClick, classes }) => {
  return (
    <Box className={classes.goBackBtnBox}>
      <Button
        onClick={() => handleClick(item.id)}
        className={classes.itemBtn}
        variant="outlined"
        size="small"
      >
        <Typography component="div">Item</Typography>
      </Button>
    </Box>
  );
};
