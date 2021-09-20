import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      maxWidth: 300,
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  textField: {
    backgroundColor: "#FEEAE6",
    borderRadius: 4,
  },
  toolBar: {
    justifyContent: "space-between",
  },
  cartIcon: {
    marginLeft: "5px",
    "& .MuiBadge-colorError": {
      backgroundColor: "#d32f2f",
    },
  },
}));
