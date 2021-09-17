import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      "& .MuiAvatar-img": {
        objectFit: "contain",
      },
    },
  };
});
