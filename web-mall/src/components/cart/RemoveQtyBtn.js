import { Button } from "@material-ui/core";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export const RemoveQtyBtn = ({ classes, row, dispatch }) => {
  return (
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
  );
};
