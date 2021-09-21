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
