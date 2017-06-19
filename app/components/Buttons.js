import React from "react";
import ButtonsFilter from "./ButtonsFilter";
import ButtonsFiltered from "./ButtonsFiltered";
import {fetchCategories} from '../utils/api';
import {PageHeader, Grid, Clearfix} from "react-bootstrap";

export default class Buttons extends React.Component {
  constructor (props) {
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
    this.setState({
      selectedCustomizable: selectedCustomizable
    })
  }

  handleSizeButtonsInput(selectedSize) {
    this.setState({
      selectedSize: selectedSize
    })
  }

  handleCategorySelectInput(selectedCategory) {
    this.setState({
      selectedCategory: selectedCategory
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <ButtonsFilter
            categories={this.props.categories}
            selectedCategory={this.state.selectedCategory}
            selectedCustomizable={this.state.selectedCustomizable}
            selectedSize={this.state.selectedSize}
            handleCustomizableButtonsInput={this.handleCustomizableButtonsInput}
            handleSizeButtonsInput={this.handleSizeButtonsInput}
            handleCategorySelectInput={this.handleCategorySelectInput}
          />
          <Clearfix></Clearfix>
          <ButtonsFiltered
            products={this.props.products}
            categories={this.props.categories}
            collections={this.props.collections}
            selectedCategory={this.state.selectedCategory}
            selectedCustomizable={this.state.selectedCustomizable}
            selectedSize={this.state.selectedSize}
          />
        </Grid>
      </div>
    )
  }
}
