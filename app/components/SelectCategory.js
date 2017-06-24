// dependecies
import React from "react";
import {DropdownButton, MenuItem} from 'react-bootstrap';

export default function CategorySelect(props) {
// dropdown to select a category to filter by
  // handle the selection
  function handleCategorySelectInputChange(eventKey, event) {
    // send the change up to component that handles state
    props.handleCategorySelectInput(eventKey)
  }

  return (
    <DropdownButton
      id="Categories"
      role={"menuitem"}
      title={props.selectedCategory}
      onSelect={handleCategorySelectInputChange}
    >
      {/* add an All category - active is added if selected*/}
      {(props.selectedCategory === 'All Categories')
        ? (<MenuItem eventKey={'All Categories'} active>All Categories</MenuItem>)
        : (<MenuItem eventKey={'All Categories'}>All Categories</MenuItem>)
      }
      {/* sort and add the categories from the API - active is added if selected*/}
      {props.categories
        .sort((a, b) => {
          if (a.description < b.description) return -1
          else if (a.description > b.description) return 1
          else return 0
        })
        .map((category) => {
          return (props.selectedCategory === category.name)
            ? (<MenuItem key={category.id} eventKey={category.name} active>{category.name}</MenuItem>)
            : (<MenuItem key={category.id} eventKey={category.name}>{category.name}</MenuItem>)
        })
      }
    </DropdownButton>
  )
}
