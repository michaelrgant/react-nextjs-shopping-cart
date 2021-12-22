import {
  Typography,
  ListItem,
  TextField,
  List,
  Button,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { Store } from '../utils/Store';
import {useContext, useEffect } from 'react'
import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query;;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", { email, password });
      dispatch({ type: 'USER_LOGIN', payload: data });
   Cookies.set('userInfo', JSON.stringify(data))
      router.push(redirect || '/');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <Layout title="Login">
        <form onSubmit={submitHandler} className={classes.form}>
          <Typography component="h1" variant="h1">
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="password"
                inputProps={{ type: "password" }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Login
              </Button>
            </ListItem>
            <ListItem>
              Don&apos;t have an account? &nbsp;
              <NextLink href="/register" passHref>
                <Link>Register</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Layout>
    </div>
  );
}
