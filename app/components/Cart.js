// dependecies
import React from "react";
import {Grid, PageHeader, Button} from "react-bootstrap"
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
    return (
      <Grid>
        <PageHeader>
          <p>
            Cart functionality will be coming soon!
          </p>
          <Button bsSize="small" type="button" onClick={this.handleDeleteCartClick}>Delete Cart</Button>
        </PageHeader>
      </Grid>
    )
  }
}
