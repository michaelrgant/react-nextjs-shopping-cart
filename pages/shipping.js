import React from "react";
import Router from "next/router";
import { useContext } from 'react'
import { Store } from '../utils/Store';
export default function Shipping() {

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state
  if (!userInfo) {
    Router.push('/login?redirect=/shipping');
  }

  return <div>Shipping</div>;
}
