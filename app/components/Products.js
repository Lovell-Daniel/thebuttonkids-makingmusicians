// dependencies
import React from "react";
import {Grid, Clearfix} from "react-bootstrap";
// components
import ProductsFilter from "./ProductsFilter";
import ProductsFiltered from "./ProductsFiltered";

export default function Products(props) {
  return (
    <div>
      <Grid>
        <ProductsFilter
          // props
          categories={props.categories}
          // state
          selectedCategory={props.selectedCategory}
          selectedCustomizable={props.selectedCustomizable}
          selectedSize={props.selectedSize}
          // state handlers
          handleCustomizableButtonsInput={props.handleCustomizableButtonsInput}
          handleSizeButtonsInput={props.handleSizeButtonsInput}
          handleCategorySelectInput={props.handleCategorySelectInput}
        />
        <Clearfix></Clearfix>
        <ProductsFiltered
          // props
          products={props.products}
          categories={props.categories}
          collections={props.collections}
          // prop handlers
          getUpdatedCart={props.getUpdatedCart}
          // state
          selectedCategory={props.selectedCategory}
          selectedCustomizable={props.selectedCustomizable}
          selectedSize={props.selectedSize}
        />
      </Grid>
    </div>
  )
}
