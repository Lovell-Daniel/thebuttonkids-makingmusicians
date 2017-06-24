// dependencies
import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const SIZEBUTTONS = ['All', 'Big Buttons', 'Small Buttons']

export default function SizeButtonGroup(props) {
// displays the buttons and state for selecting the filter options for size of buttons
  // handles the selection
  function handleSizeButtonsInputChange(e) {
    // send the change up to component that handles state
    props.handleSizeButtonsInput(e.target.textContent)
  }

  return (
    <ButtonGroup>
      {SIZEBUTTONS.map((sizeButton) => {
        return (props.selectedSize === sizeButton)
          ? (<Button key={sizeButton} active onClick={handleSizeButtonsInputChange}>{sizeButton}</Button>)
          : (<Button key={sizeButton} onClick={handleSizeButtonsInputChange}>{sizeButton}</Button>)
      })}
    </ButtonGroup>
  )
}
