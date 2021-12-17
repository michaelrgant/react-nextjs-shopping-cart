import React, { Children } from 'react'
import Head from 'next/head'
import useStyles from '../utils/style';
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Ebazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Ebazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>All rights reserve. Ebazon</footer>
    </div>
  );
}
