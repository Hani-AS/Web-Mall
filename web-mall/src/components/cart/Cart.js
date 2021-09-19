import React from "react";
import { CartState } from "../../context/cart/CartContext";
import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
import { BackToItemBtn } from "./BackToItemBtn";
import { RemoveFromCartBtn } from "./RemoveFromCartBtn";
import { RemoveQtyBtn } from "./RemoveQtyBtn";
import { AddQtyBtn } from "./AddQtyBtn";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const invoiceTotal = total;
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <>
      {cart.length === 0 ? (
        <Grid container className={classes.emptyCart}>
          <Typography variant="h4" component="h4">
            Cart is empty!
          </Typography>
        </Grid>
      ) : (
        <Grid container className={classes.mainContainer}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell
                    align="right"
                    colSpan={2}
                    className={classes.priceCell}
                  >
                    Price
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" className={classes.descCell}>
                    Desc
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="center">Qty.</TableCell>
                  <TableCell align="right">Unit</TableCell>
                  <TableCell align="right">Sum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell>
                      <BackToItemBtn {...{ row, handleClick, classes }} />
                    </TableCell>
                    <TableCell>
                      <RemoveFromCartBtn {...{ row, dispatch }} />
                    </TableCell>
                    <TableCell align="right">
                      <Grid container className={classes.qtyContainer}>
                        <RemoveQtyBtn {...{ classes, row, dispatch }} />
                        <Typography
                          className={classes.qtyText}
                          variant="button"
                          component="p"
                        >
                          {row.qty}
                        </Typography>
                        <AddQtyBtn {...{ classes, dispatch, row }} />
                      </Grid>
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.qty * row.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} className={classes.totalCell}>
                    Total
                  </TableCell>
                  <TableCell align="right">{invoiceTotal.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </>
  );
};
