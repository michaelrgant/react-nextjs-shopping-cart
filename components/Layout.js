
import Head from "next/head";
import { useContext } from "react";
import NextLink from "next/link";
import useStyles from "../utils/style";
import { AppBar, Container, Toolbar, Typography, Link, Switch, Badge,Button } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider,Menu,  MenuItem } from "@material-ui/core";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import { useState } from 'react';
import Cookies from "js-cookie"

export default function Layout({ description, title, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store)
  const {darkMode, cart, userInfo} = state

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
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  }

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/')
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
              {userInfo ? (
                <>
                  <Button  aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}>{userInfo.name}</Button>
                  <Menu id="simple=menu" anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                   <MenuItem onClick={(e) => loginMenuCloseHandler(e, '/profile')}>Profile</MenuItem>
                   <MenuItem onClick={(e) => loginMenuCloseHandler(e, '/order-history')}>Order History</MenuItem>
                   <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
                  )
                :(<NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>)

              }
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All rights reserve. Ebazon</footer>
      </ThemeProvider>
    </div>
  );
}
