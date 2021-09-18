import { Avatar, Button, Typography, Box } from "@material-ui/core";
import React from "react";

export const BackToItemBtn = ({ row, handleClick, classes }) => {
  return (
    <Box>
      <Button onClick={() => handleClick(row.id)} className={classes.titleBtn}>
        <Avatar alt={row.title} src={row.image} className={classes.avatar} />
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.titleText}
        >
          {row.title}
        </Typography>
      </Button>
    </Box>
  );
};
