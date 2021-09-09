import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export const ProductCard = () => {
  const { products, isLoading } = useContext(ProductContext);
  const classes = useStyles();
  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          products.map((product) => {
            const {
              category,
              description,
              image,
              price,
              rating: { count, rate },
              title,
            } = product;
            return (
              <Grid item key={product.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt={title}
                      image={image}
                      title={title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.title}>
                        <Typography
                          className={classes.heading}
                          gutterBottom
                          variant="subtitle1"
                          component="h2"
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box className={classes.priceBox}>
                        <Typography
                          variant="body2"
                          color="secondary"
                          component="p"
                        >
                          {category.toUpperCase()}
                        </Typography>
                        <Typography
                          className={classes.priceTitle}
                          variant="body2"
                          color="secondary"
                          component="p"
                        >
                          €{price}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider />
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="secondary"></Button> */}
                    <Button size="small">
                      <Typography
                        className={classes.cartBtn}
                        variant="button"
                        color="secondary"
                        component="p"
                      >
                        ADD TO CART
                      </Typography>
                      <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};
