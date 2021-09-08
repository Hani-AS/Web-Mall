import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  shoppingCartIcon: {
    backgroundColor: "red",
  },
  textField: {
    backgroundColor: "#FEEAE6",
    borderRadius: 4,
  },
}));
