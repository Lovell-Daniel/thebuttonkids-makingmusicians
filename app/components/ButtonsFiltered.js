// dependencies
import React from "react";
import {Row} from "react-bootstrap"
// components
import Product from "./Product";
// utils
import {
  getRelationshipId,
  getRelationshipName,
  satisfiesSize,
  satisfiesCategory,
  satisfiesCustomizable
} from "../utils/filter.js"

export default class ButtonsFiltered extends React.Component {
// filters and contains the products that need to be displayed
// checks against the three filter options
  render() {
    return (
      <Row>
        {this.props.products
          .filter((product) => {
            return (
              satisfiesCategory(
                this.props.selectedCategory,
                getRelationshipName(
                  product.relationships.categories.data[0].id,
                  this.props.categories
                )
              ) && satisfiesSize(
                this.props.selectedSize,
                getRelationshipId("Big Buttons", this.props.collections),
                getRelationshipId("Small Buttons", this.props.collections),
                product
              ) && satisfiesCustomizable(
                this.props.selectedCustomizable,
                getRelationshipId("Customizable Buttons", this.props.collections),
                product
              )
            )
          })
          .map((product) => {
            return (
              <Product
                // attributes
                key={product.id}
                // props
                product={product}
                // props handlers
                getUpdatedCart={this.props.getUpdatedCart}
              />)
          })
        }
      </Row>
    )
  }
}
