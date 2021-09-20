import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      width: "100%",
      maxHeight: 200,
      justifyContent: "center",
    },
    avatar: {
      "& .css-1pqm26d-MuiAvatar-img": {
        objectFit: "contain",
      },
    },
    qtyBtn: {
      maxWidth: 40,
    },
    qtyContainer: {
      flexWrap: "nowrap !important",
      flexDirection: "row !important",
      justifyContent: "space-around",
      alignItems: "center",
    },
    titleText: {
      padding: 0,
      display: "box",
      lineClamp: 2,
      boxOrient: "vertical",
      overflow: "hidden",
    },
    itemBtn: {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      margin: "0",
    },
    tableContainer: {
      marginTop: "1rem",
      maxWidth: 600,
    },
    emptyCart: {
      marginTop: "1rem",
      justifyContent: "center",
    },
    mainContainer: {
      justifyContent: "center",
      width: "100%",
      height: "80%",
      marginTop: "1rem",
    },
    checkoutContainer: {
      width: "100%",
      height: "100%",
    },
    itemContainer: {
      maxWidth: 500,
    },
    innerQtyContainer: {
      alignItems: "center",
      flexWrap: "nowrap !important",
    },
    goBackBtnBox: {
      textAlign: "center",
    },
    cartTotalContainer: {
      justifyContent: "space-around",
      alignItems: "center",
    },
    checkoutBtn: {
      color: `${theme.palette.primary.contrastText} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  };
});
