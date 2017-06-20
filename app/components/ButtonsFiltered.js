import React from "react";
import Item from "./Item";
import { Row } from "react-bootstrap"
import {getRelationshipId, getRelationshipName, satisfiesSize, satisfiesCategory, satisfiesCustomizable} from "../utils/filter.js"

export default class ButtonsFiltered extends React.Component {
  render() {
    return (
      <Row>
        {this.props.products
          .filter((product) => {
            return (
              satisfiesCategory(
                this.props.selectedCategory,
                getRelationshipName(product.relationships.categories.data[0].id, this.props.categories)
              )
              && satisfiesSize(
                this.props.selectedSize,
                getRelationshipId("Big Buttons", this.props.collections),
                getRelationshipId("Small Buttons", this.props.collections),
                product
              )
              && satisfiesCustomizable(
                this.props.selectedCustomizable,
                getRelationshipId("Customizable Buttons", this.props.collections),
                product
              )
            )
          })
          .map((product) => {
            return (
              <Item key={product.id} product={product} handleUpdatedCartTrue={this.props.handleUpdatedCartTrue} />
            )
          })
        }
      </Row>
    )
  }
}
