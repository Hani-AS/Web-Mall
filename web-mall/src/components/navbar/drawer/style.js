import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    drawerContainer: {
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: 300,
      flexWrap: "nowrap !important",
    },
    drawerText: {
      justifyContent: "flex-start",
    },
    drawerAvatar: {
      margin: "10px",
      "& .css-1pqm26d-MuiAvatar-img": {
        objectFit: "contain",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      },
    },

    favDeleteButton: {
      color: `${theme.palette.secondary.main} !important`,
    },
    clearListBtn: {
      color: `${theme.palette.secondary.main} !important`,
    },
  };
});
