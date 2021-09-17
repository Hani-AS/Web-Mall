import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { useStyles } from "./style";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from "@material-ui/core";
import { CartState } from "../../context/cart/CartContext";

export const Item = () => {
  const { id } = useParams();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const classes = useStyles();
  const [item, setItem] = useState({});
  const [status, setStatus] = useState(null);
  const { description, image, price, title, rating } = item;
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setItem(data);
          setStatus(true);
        } else {
          throw new Error(response.status, response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const InCart = cart.some((product) => product.id === item.id);

  return (
    <>
      {status && (
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem} xs={12} sm={10} lg={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
                component="img"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            lg={4}
            className={classes.secondaryContainer}
          >
            <Card className={classes.descriptionCard}>
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  className={classes.title}
                >
                  {title}
                </Typography>
                <Box className={classes.ratingBox}>
                  <Rating name="text-feedback" value={rating.rate} readOnly />
                  <Box sx={{ ml: 2 }}>{rating.count}</Box>
                </Box>
                <Typography
                  className={classes.priceTitle}
                  variant="h2"
                  component="h2"
                >
                  € {price}
                </Typography>
              </CardContent>
              <CardContent className={classes.description}>
                <Typography variant="body2" color="secondary" component="p">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.cardBtn}
                  variant="contained"
                  disabled={InCart && true}
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: item });
                  }}
                >
                  <Typography
                    className={classes.cartText}
                    variant="button"
                    component="p"
                  >
                    {InCart ? "IN CART" : "ADD TO CART"}
                  </Typography>
                  <AddShoppingCartIcon />
                </Button>
              </CardActions>
              <CardActions className={classes.cardActionSecondary}>
                <Button className={classes.BtnSecondary} variant="contained">
                  <Typography
                    className={classes.cartText}
                    variant="button"
                    component="p"
                  >
                    ADD TO FAVORITE
                  </Typography>
                  <FavoriteBorderIcon />
                </Button>
                <Button
                  className={classes.BtnSecondary}
                  variant="contained"
                  onClick={handleClick}
                >
                  <Typography
                    className={classes.cartText}
                    variant="button"
                    component="p"
                  >
                    CONTINUE SHOPPING
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
