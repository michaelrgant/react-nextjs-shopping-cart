import React, { Children } from "react";
import Head from "next/head";
import NextLink from "next/link";
import useStyles from "../utils/style";
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material";

export default function Layout({ description, title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Ebazon` : "Next Ebazon"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
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
    </div>
  );
}
