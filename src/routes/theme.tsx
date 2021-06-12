import { colors, makeStyles, Theme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  centered: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: "sticky",
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideProfile: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: 30,
    padding: "10px 15px",
    width: 260,
    borderRadius: 50,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.lightBlue[50],
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },

  tweetWrapper: {
    color: "inherit",
    textDecoration: "none",
  },
}));
