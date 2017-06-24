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

export default function ButtonsFiltered(props) {
// filters and contains the products that need to be displayed
// checks against the three filter options
  return (
    <Row>
      {props.products
        .filter((product) => {
          return (
            satisfiesCategory(
              props.selectedCategory,
              getRelationshipName(
                product.relationships.categories.data[0].id,
                props.categories
              )
            ) && satisfiesSize(
              props.selectedSize,
              getRelationshipId("Big Buttons", props.collections),
              getRelationshipId("Small Buttons", props.collections),
              product
            ) && satisfiesCustomizable(
              props.selectedCustomizable,
              getRelationshipId("Customizable Buttons", props.collections),
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
              getUpdatedCart={props.getUpdatedCart}
            />
          )
        })
      }
    </Row>
  )
}
