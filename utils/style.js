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
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: 'initial'
  },
  transparentBackground: {
    backgroundColor: 'transparent'
  },
  error: {
    color: '#f04040'
  },
  fullWidth: {
    width: '100%'
  }
});

export default useStyles;
// btn hover #f3cf6b background #f0c040 #ecb41a
