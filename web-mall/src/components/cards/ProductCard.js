import React, { useContext } from "react";
import { ProductContext } from "../../context/products/ProductContext";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShopIcon from "@material-ui/icons/Shop";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
            const { category, image, price, title, id } = product;
            return (
              <Grid item key={product.id}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    alt={title}
                    image={image}
                    title={title}
                  />
                  <FavoriteIcon className={classes.FavoriteIcon} />
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
                      <Typography variant="body2" component="p">
                        {category.toUpperCase()}
                      </Typography>
                      <Typography
                        className={classes.priceTitle}
                        variant="body2"
                        component="p"
                      >
                        €{price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Divider />
                  <Link to={`/${id}`} className={classes.aLink}>
                    <CardActions className={classes.cardAction}>
                      <Button className={classes.cardBtn}>
                        <Typography
                          className={classes.cartText}
                          variant="button"
                          component="p"
                        >
                          SHOP
                        </Typography>
                        <ShopIcon />
                      </Button>
                    </CardActions>
                  </Link>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};
