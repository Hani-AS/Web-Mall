import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export const RemoveFromCartBtn = ({ dispatch, item }) => {
  return (
    <Button
      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
    >
      <DeleteIcon fontSize="small" />
    </Button>
  );
};
