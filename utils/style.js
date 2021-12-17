import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#f0c040",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
  grow: {
    flexGrow: 1
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  }
});

export default useStyles;
