// dependecies
import React from "react";
import {DropdownButton, MenuItem} from 'react-bootstrap';

export default class CategorySelect extends React.Component {
// dropdown to select a category to filter by
  constructor(props) {
    super(props)
    this.handleCategorySelectInputChange = this.handleCategorySelectInputChange.bind(this)
  }

  // handle the selection
  handleCategorySelectInputChange(eventKey, event) {
    // send the change up to component that handles state
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
        {/* add an All category - active is added if selected*/}
        {(this.props.selectedCategory === 'All Categories')
          ? (<MenuItem eventKey={'All Categories'} active>All Categories</MenuItem>)
          : (<MenuItem eventKey={'All Categories'}>All Categories</MenuItem>)
        }
        {/* sort and add the categories from the API - active is added if selected*/}
        {this.props.categories
          .sort((a, b) => {
            if (a.description < b.description) return -1
            else if (a.description > b.description) return 1
            else return 0
          })
          .map((category) => {
            return (this.props.selectedCategory === category.name)
              ? (<MenuItem key={category.id} eventKey={category.name} active>{category.name}</MenuItem>)
              : (<MenuItem key={category.id} eventKey={category.name}>{category.name}</MenuItem>)
          })
        }
      </DropdownButton>
    )
  }
}
