// dependecies
import React from "react";
import {Grid, PageHeader, Button} from "react-bootstrap"
// components
import CartItems from "./CartItems.js"
import CartSummary from "./CartSummary.js"
// utils
import {deleteCart} from "../utils/api.js"

export default function Cart(props){
  function handleDeleteCartClick() {
    deleteCart().then(() => {
      props.getUpdatedCart()
    })
  }

  return (
    <Grid>
      Items
      <CartItems cartItems={props.cartItems} />
      Summary
      <CartSummary cartItems={props.cartItems} />
      <Button bsSize="small" type="button" onClick={handleDeleteCartClick}>Delete Cart</Button>
    </Grid>
  )
}
