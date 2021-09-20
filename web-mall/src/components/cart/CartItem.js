import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { AddQtyBtn } from "./AddQtyBtn";
import { RemoveQtyBtn } from "./RemoveQtyBtn";
import { RemoveFromCartBtn } from "./RemoveFromCartBtn";
import { BackToItemBtn } from "./BackToItemBtn";

export const CartItem = ({
  item: { title, image, price, qty },
  item,
  dispatch,
  handleClick,
  classes,
}) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={image} src={image} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                € {price}
              </Typography>
            </>
          }
        />
      </ListItem>
      <CardActions>
        <Grid container className={classes.qtyContainer}>
          <Grid item>
            <BackToItemBtn {...{ item, handleClick, classes }} />
          </Grid>
          <Grid item>
            <Grid container className={classes.innerQtyContainer}>
              <RemoveQtyBtn {...{ classes, item, dispatch }} />
              <Typography
                className={classes.qtyText}
                variant="button"
                component="div"
              >
                {qty}
              </Typography>
              <AddQtyBtn {...{ classes, dispatch, item }} />
            </Grid>
          </Grid>
          <Grid item>
            <RemoveFromCartBtn {...{ item, dispatch }} />
          </Grid>
        </Grid>
      </CardActions>
      <Divider variant="inset" component="li" />
    </>
  );
};
