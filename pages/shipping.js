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

export default function Shipping() {
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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = async({fullName, addtess, city, postalCode, country}) => {
    try {
      const { data } = await axios.post("/api/users/register", {name,  email, password });
      dispatch({ type: 'USER_LOGIN', payload: data });
   Cookies.set('userInfo', JSON.stringify(data))
      router.push(redirect || '/');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <Layout title="Register">
        <form onSubmit={submitHandler} className={classes.form}>
          <Typography component="h1" variant="h1">
            Register
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="name"
                inputProps={{ type: "text" }}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </ListItem>
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
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPassword"
                label="confirmPassword"
                inputProps={{ type: "password" }}
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Register
              </Button>
            </ListItem>
            <ListItem>
             Already have an account? &nbsp;
              <NextLink href={`/login?redirect=${redirect || '/'}`} passHref>
                <Link>Login</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Layout>
    </div>
  );
}
