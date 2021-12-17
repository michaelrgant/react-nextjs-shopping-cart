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
    marginTop: 10,
    textAlign: "center",
  },
  grow: {
    flexGrow: 1
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default useStyles;
