// dependecies
import React from "react";
import {Grid, PageHeader, Button} from "react-bootstrap"
// components
import CartItems from "./CartItems.js"
// utils
import {deleteCart} from "../utils/api.js"

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteCartClick = this.handleDeleteCartClick.bind(this)
  }

  handleDeleteCartClick() {
    deleteCart().then(() => {
      this.props.getUpdatedCart()
    })
  }

  render() {
    console.log("cart");
    console.log(this.props.cart);
    console.log("items");
    console.log(this.props.cartItems);
    return (
      <Grid>
        <PageHeader>
          <p>
            Cart functionality will be coming soon!
          </p>
        </PageHeader>
        <div>
          <CartItems cartItems={this.props.cartItems} />
          <Button bsSize="small" type="button" onClick={this.handleDeleteCartClick}>Delete Cart</Button>
        </div>
      </Grid>
    )
  }
}
