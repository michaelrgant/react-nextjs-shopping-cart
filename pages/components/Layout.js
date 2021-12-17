import React, { Children } from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Ebazon</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Ebazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        All rights reserve. Ebazon
      </footer>
    </div>
  );
}
