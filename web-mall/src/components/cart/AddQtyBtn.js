import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export const AddQtyBtn = ({ classes, dispatch, row }) => {
  return (
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
  );
};
