import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
      height: "auto",
      "& .MuiCardMedia-img": {
        objectFit: "contain !important",
      },
    },
    media: {
      height: 250,
      cursor: "pointer",
      backgroundSize: "contain",
      padding: "1rem",
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
    },
    priceTitle: {
      fontWeight: 700,
    },
    cardAction: {
      justifyContent: "center",
      height: 40,
    },
    cartBtn: {
      paddingRight: "1rem",
    },
    cardContent: {
      paddingBottom: 0,
    },
  };
});
