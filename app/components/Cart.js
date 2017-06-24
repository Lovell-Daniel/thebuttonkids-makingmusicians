// dependecies
import React from "react";
import {Grid, PageHeader, Button} from "react-bootstrap"
// components
import CartItems from "./CartItems.js"
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
      <PageHeader>
        <p>
          Cart functionality will be coming soon!
        </p>
      </PageHeader>
      <div>
        <CartItems cartItems={props.cartItems} />
        <Button bsSize="small" type="button" onClick={handleDeleteCartClick}>Delete Cart</Button>
      </div>
    </Grid>
  )
}
