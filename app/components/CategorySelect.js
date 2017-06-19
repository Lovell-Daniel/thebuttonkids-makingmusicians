import React from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class CategorySelect extends React.Component {
  constructor(props) {
    super(props)
    this.handleCategorySelectInputChange = this.handleCategorySelectInputChange.bind(this)
  }

  handleCategorySelectInputChange(eventKey, event) {
    this.props.handleCategorySelectInput(eventKey)
  }

  render() {
    return (
      <DropdownButton
        id="Categories"
        role={"menuitem"}
        title={this.props.selectedCategory}
        onSelect={this.handleCategorySelectInputChange}
      >
        {(this.props.selectedCategory === 'All Categories') ? (
          <MenuItem eventKey={'All Categories'} active>All Categories</MenuItem>
        ) : (
          <MenuItem eventKey={'All Categories'}>All Categories</MenuItem>
        )}
        {this.props.categories.sort((a, b) => {
          if (a.description < b.description) return -1;
          if (a.description > b.description) return 1;
          return 0;
        }).map((category) => {
          if (this.props.selectedCategory === category.name) {
            return <MenuItem key={category.id} eventKey={category.name} active>{category.name}</MenuItem>
          }
          return <MenuItem key={category.id} eventKey={category.name}>{category.name}</MenuItem>
        })}
      </DropdownButton>
    )
  }
}
