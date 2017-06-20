import React from "react";
import {Grid, PageHeader} from "react-bootstrap"
import {deleteCart} from "../utils/api.js"

export default class Cart extends React.Component {
  render() {
    deleteCart()
    return (
      <Grid>
        <PageHeader>
          <p>
            Cart functionality will be coming soon!
          </p>
        </PageHeader>
      </Grid>
    )
  }
}
