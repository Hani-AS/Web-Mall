import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      justifyContent: "center",
      marginTop: "2rem",
    },
    item: {
      width: "100%",
      textAlign: "center",
    },
    btn: {
      maxWidth: 200,
      margin: "0 auto",
    },
    h1: {
      margin: 0,
    },
  };
});
