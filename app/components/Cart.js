// dependecies
import React from "react";
import {Grid, PageHeader, Button} from "react-bootstrap"
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
        <Button bsSize="small" type="button" onClick={handleDeleteCartClick}>Delete Cart</Button>
      </PageHeader>
    </Grid>
  )
}
