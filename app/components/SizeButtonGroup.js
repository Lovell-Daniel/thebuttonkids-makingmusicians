// dependencies
import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const SIZEBUTTONS = ['All', 'Big Buttons', 'Small Buttons']

export default class SizeButtonGroup extends React.Component {
  // displays the buttons and state for selecting the filter options for size of buttons
  constructor(props) {
    super(props)
    this.handleSizeButtonsInputChange = this.handleSizeButtonsInputChange.bind(this)
  }

  // handles the selection
  handleSizeButtonsInputChange(e) {
    // send the change up to component that handles state
    this.props.handleSizeButtonsInput(e.target.textContent)
  }

  render() {
    return (
      <ButtonGroup>
        {SIZEBUTTONS.map((sizeButton) => {
          return (this.props.selectedSize === sizeButton)
            ? (<Button key={sizeButton} active onClick={this.handleSizeButtonsInputChange}>{sizeButton}</Button>)
            : (<Button key={sizeButton} onClick={this.handleSizeButtonsInputChange}>{sizeButton}</Button>)
        })}
      </ButtonGroup>
    )
  }
}
