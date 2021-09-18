import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      "& .MuiAvatar-img": {
        objectFit: "contain",
      },
    },
    qtyBtn: {
      maxWidth: 40,
    },
    qtyContainer: {
      flexWrap: "nowrap !important",
      flexDirection: "row !important",
      justifyContent: "center",
    },
    titleText: {
      padding: 0,
      marginLeft: "10px",
      display: "box",
      lineClamp: 2,
      boxOrient: "vertical",
      overflow: "hidden",
    },
    titleBtn: {
      padding: 0,
      textAlign: "left",
    },
    tableContainer: {
      marginTop: "1rem",
    },
    emptyCart: {
      marginTop: "1rem",
      justifyContent: "center",
    },
  };
});
