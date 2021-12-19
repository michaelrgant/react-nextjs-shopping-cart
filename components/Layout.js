
import Head from "next/head";
import { useContext } from "react";
import NextLink from "next/link";
import useStyles from "../utils/style";
import { AppBar, Container, Toolbar, Typography, Link, Switch, Badge } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Store } from "../utils/Store";
import Cookies from "js-cookie"

export default function Layout({ description, title, children }) {
  const { state, dispatch } = useContext(Store)
  const {darkMode, cart} = state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#ecb41a",
      },
      secondary: {
        main: "#f0c040",
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" })
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  }
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Ebazon` : "Next Ebazon"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Ebazon</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                 <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        Cart
                      </Badge>
                    ) : (
                      'Cart'
                    )}
                  </Typography>
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All rights reserve. Ebazon</footer>
      </ThemeProvider>
    </div>
  );
}
