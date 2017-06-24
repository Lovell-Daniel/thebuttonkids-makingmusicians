// dependencies
import React from "react";
import {PageHeader, Grid, Clearfix} from "react-bootstrap";
// components
import ProductsFilter from "./ProductsFilter";
import ProductsFiltered from "./ProductsFiltered";
// utils
import {fetchCategories} from '../utils/api';

export default class Products extends React.Component {
// container for the filtering section and the section for displaying products
// the common parent that has the state for the filtering selections
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "All Categories",
      selectedCustomizable: "All",
      selectedSize: "All"
    }
    this.handleCustomizableButtonsInput = this.handleCustomizableButtonsInput.bind(this)
    this.handleSizeButtonsInput = this.handleSizeButtonsInput.bind(this)
    this.handleCategorySelectInput = this.handleCategorySelectInput.bind(this)
  }

  handleCustomizableButtonsInput(selectedCustomizable) {
    this.setState({selectedCustomizable: selectedCustomizable})
  }

  handleSizeButtonsInput(selectedSize) {
    this.setState({selectedSize: selectedSize})
  }

  handleCategorySelectInput(selectedCategory) {
    this.setState({selectedCategory: selectedCategory})
  }

  render() {
    return (
      <div>
        <Grid>
          <ProductsFilter
            // props
            categories={this.props.categories}
            // state
            selectedCategory={this.state.selectedCategory}
            selectedCustomizable={this.state.selectedCustomizable}
            selectedSize={this.state.selectedSize}
            // state handlers
            handleCustomizableButtonsInput={this.handleCustomizableButtonsInput}
            handleSizeButtonsInput={this.handleSizeButtonsInput}
            handleCategorySelectInput={this.handleCategorySelectInput}
          />
          <Clearfix></Clearfix>
          <ProductsFiltered
            // props
            products={this.props.products}
            categories={this.props.categories}
            collections={this.props.collections}
            // prop handlers
            getUpdatedCart={this.props.getUpdatedCart}
            // state
            selectedCategory={this.state.selectedCategory}
            selectedCustomizable={this.state.selectedCustomizable}
            selectedSize={this.state.selectedSize}
          />
        </Grid>
      </div>
    )
  }
}
