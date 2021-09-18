import React from "react";
import { CartState } from "../../context/cart/CartContext";
import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
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
import { BackToItemBtn } from "./BackToItemBtn";
import { RemoveFromCartBtn } from "./RemoveFromCartBtn";
import { RemoveQtyBtn } from "./RemoveQtyBtn";
import { AddQtyBtn } from "./AddQtyBtn";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const classes = useStyles();
  const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  };
  const priceRow = (qty, unit) => {
    return qty * unit;
  };
  const createRow = (qty, unit) => {
    const price = priceRow(qty, unit);
    return { qty, unit, price };
  };
  const subtotal = (items) => {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };
  const sum = cart.map((item) => {
    return createRow(item.qty, item.price);
  });
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  const invoiceTotal = subtotal(sum);
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
                    <TableCell align="right">
                      {ccyFormat(row.qty * row.price)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} className={classes.totalCell}>
                    Total
                  </TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </>
  );
};
