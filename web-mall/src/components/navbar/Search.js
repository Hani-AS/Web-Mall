import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";

export const Search = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          type="search"
          size="small"
          className={classes.textField}
          color="secondary"
        />
      </div>
    </form>
  );
};
