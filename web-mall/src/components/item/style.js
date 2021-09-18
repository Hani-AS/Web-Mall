import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& .MuiCardMedia-img": {
        objectFit: "contain",
      },
      maxHeight: 800,
      "&.MuiPaper-elevation1": {
        boxShadow: "none",
      },
    },
    media: {
      height: 500,
      margin: "1rem 0",
    },
    gridContainer: {
      marginTop: "2rem",
      justifyContent: "center",
    },
    descriptionCard: {
      backgroundColor: theme.palette.background.default,
      boxShadow: "none",
    },
    cardContent: {
      justifyContent: "center",
      paddingBottom: 0,
    },
    fieldset: {
      padding: 0,
      margin: "1rem 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    priceTitle: {
      fontWeight: 700,
      color: theme.palette.secondary.main,
      margin: "0.5rem 0",
    },
    title: {
      margin: 0,
      fontWeight: 500,
    },
    ratingBox: {
      width: 200,
      display: "flex",
      alignItems: "center",
      marginTop: "0.5rem",
    },
    cardBtn: {
      height: 40,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
    showCartBtn: {
      height: 40,
      width: "100%",
      backgroundColor: "rgb(56, 142, 60)",
    },
    cartText: {
      paddingRight: "0.2rem",
      color: theme.palette.secondary.main,
    },
    showCartText: {
      paddingRight: "0.2rem",
      color: theme.palette.secondary.contrastText,
    },
    showCartIcon: {
      color: "white !important",
    },
    BtnSecondary: {
      backgroundColor: "#e5e3de",
      width: "100%",
    },
    cardActionSecondary: {
      justifyContent: "center",
    },
    secondaryContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    description: {
      padding: "0px 16px",
    },
  };
});
