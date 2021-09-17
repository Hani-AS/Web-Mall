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
  Box,
  Avatar,
  Button,
} from "@material-ui/core";

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow key={row.title}>
              <TableCell>
                <Box>
                  <Button onClick={() => handleClick(row.id)}>
                    <Avatar
                      alt={row.title}
                      src={row.image}
                      className={classes.avatar}
                    />
                  </Button>
                  {row.title}
                </Box>
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            {/* <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            {/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell> */}
            {/* <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
