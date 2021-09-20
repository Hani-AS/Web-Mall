import { Button } from "@material-ui/core";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export const RemoveQtyBtn = ({ classes, item, dispatch }) => {
  return (
    <Button
      className={classes.qtyBtn}
      onClick={() =>
        item.qty > 1 &&
        dispatch({
          type: "CHANGE_CART_QTY",
          payload: { id: item.id, qty: item.qty - 1 },
        })
      }
    >
      <RemoveIcon fontSize="inherit" />
    </Button>
  );
};
