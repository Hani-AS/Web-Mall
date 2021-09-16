import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
      height: "auto",
      "& .MuiCardMedia-img": {
        objectFit: "contain !important",
      },
      position: "relative",
    },
    media: {
      height: 250,
      cursor: "default",
      backgroundSize: "contain",
      padding: "1rem",
      marginTop: "1rem",
      transition: "transform 0.2s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },

    title: {
      height: 70,
      width: 313,
      display: "flex",
      alignItems: "flex-end",
    },
    heading: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      lineHeight: "1.3",
    },
    priceBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 40,
      color: theme.palette.secondary.main,
    },
    priceTitle: {
      fontWeight: 700,
      color: theme.palette.secondary.main,
    },
    cardAction: {
      justifyContent: "center",
      height: 40,
      padding: "0",
      backgroundColor: theme.palette.primary.main,
    },
    cardBtn: {
      height: 40,
      width: "100%",
    },
    cartText: {
      paddingRight: "0.2rem",
      color: theme.palette.secondary.main,
    },
    cardContent: {
      paddingBottom: 0,
    },
    aLink: {
      color: "inherit",
      textDecoration: "inherit",
    },
    FavoriteIcon: {
      position: "absolute",
      right: "8px",
      top: "5px",
      color: "#e9d5d5",
      "&:hover": {
        color: "red",
        cursor: "pointer",
      },
    },
  };
});
