import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { useStyles } from "./style";
import { CartState } from "../../context/cart/CartContext";
import { AddToCartBtn } from "./AddToCartBtn";
import { ShowCartBtn } from "./ShowCartBtn";
import { ContinueShoppingBtn } from "./ContinueShoppingBtn";
import { AddToFavoriteBtn } from "./AddToFavoriteBtn";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
} from "@material-ui/core";

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
                <Typography variant="body2" color="secondary" component="div">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                {!InCart ? (
                  <AddToCartBtn {...{ dispatch, item }} />
                ) : (
                  <ShowCartBtn {...{ Link }} />
                )}
              </CardActions>
              <CardActions className={classes.cardActionSecondary}>
                <AddToFavoriteBtn />
                <ContinueShoppingBtn />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};
