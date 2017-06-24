// dependencies
import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const CUSTOMIZABLEBUTTONS = ['All', 'Customizable', 'Not Customizable']

export default function CustomizableButtonGroup(props) {
// displays the buttons and state for selecting the filter options for customizable buttons
  // handles the selection
  function handleCustomizableButtonsInputChange(e) {
    // send the change up to component that handles state
    props.handleCustomizableButtonsInput(e.target.textContent)
  }

  return (
    <ButtonGroup>
      {CUSTOMIZABLEBUTTONS.map((customizableButton) => {
        return (props.selectedCustomizable === customizableButton)
          ? (<Button key={customizableButton} active onClick={handleCustomizableButtonsInputChange}>{customizableButton}</Button>)
          : (<Button key={customizableButton} onClick={handleCustomizableButtonsInputChange}>{customizableButton}</Button>)
      })}
    </ButtonGroup>
  )
}
