import React, { Children } from "react";
import Head from "next/head";
import NextLink from "next/link";
import useStyles from "../utils/style";
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

export default function Layout({ description, title, children }) {
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
      type: "light",
      primary: {
        main: "#ecb41a",
      },
      secondary: {
        main: "#f0c040",
      },
    },
  });
  const classes = useStyles();
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
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
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
