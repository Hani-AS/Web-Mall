import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CartState } from "../../context/cart/CartContext";
import { fetchFromApi } from "../../utils/helpers";
import { Button } from "@mui/material";

export const StripeCheckout = ({ classes }) => {
  const {
    state: { cart },
  } = CartState();
  const stripe = useStripe();

  const handleCheckOut = async (e) => {
    const line_items = cart.map((item) => {
      return {
        quantity: item.qty,
        price_data: {
          currency: "EUR",
          unit_amount: item.price * 100, // in cents
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
        },
      };
    });
    const response = await fetchFromApi("create-checkout-session", {
      body: { line_items },
    });
    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleCheckOut}
      className={classes.checkoutBtn}
    >
      Proceed to checkout
    </Button>
  );
};
