import React from "react";
import { CartState } from "../../context/cart/CartContext";
import { useHistory } from "react-router-dom";
import { useStyles } from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
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
  Grid,
  Typography,
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
    <>
      {cart.length === 0 ? (
        <Grid container className={classes.emptyCart}>
          <Typography variant="h4" component="h4">
            Cart is empty!
          </Typography>
        </Grid>
      ) : (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
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
                    <Box>
                      <Button
                        onClick={() => handleClick(row.id)}
                        className={classes.titleBtn}
                      >
                        <Avatar
                          alt={row.title}
                          src={row.image}
                          className={classes.avatar}
                        />
                        <Typography
                          variant="subtitle1"
                          component="div"
                          className={classes.titleText}
                        >
                          {row.title}
                        </Typography>
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: row })
                      }
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Grid container className={classes.qtyContainer}>
                      <Button
                        className={classes.qtyBtn}
                        onClick={() =>
                          row.qty > 1 &&
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: { id: row.id, qty: row.qty - 1 },
                          })
                        }
                      >
                        <RemoveIcon fontSize="inherit" />
                      </Button>
                      <Typography
                        className={classes.qtyText}
                        variant="button"
                        component="p"
                      >
                        {row.qty}
                      </Typography>
                      <Button
                        className={classes.qtyBtn}
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: { id: row.id, qty: row.qty + 1 },
                          })
                        }
                      >
                        <AddIcon fontSize="inherit" />
                      </Button>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(row.qty * row.price)}
                  </TableCell>
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
      )}
    </>
  );
};
