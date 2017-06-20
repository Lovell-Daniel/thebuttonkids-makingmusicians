// dependencies
import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const CUSTOMIZABLEBUTTONS = ['All', 'Customizable', 'Not Customizable']

export default class CustomizableButtonGroup extends React.Component {
// displays the buttons and state for selecting the filter options for customizable buttons
  constructor(props) {
    super(props)
    this.handleCustomizableButtonsInputChange = this.handleCustomizableButtonsInputChange.bind(this)
  }

  // handles the selection
  handleCustomizableButtonsInputChange(e) {
    // send the change up to component that handles state
    this.props.handleCustomizableButtonsInput(e.target.textContent)
  }

  render() {
    return (
      <ButtonGroup>
        {CUSTOMIZABLEBUTTONS.map((customizableButton) => {
          return (this.props.selectedCustomizable === customizableButton)
            ? (<Button key={customizableButton} active onClick={this.handleCustomizableButtonsInputChange}>{customizableButton}</Button>)
            : (<Button key={customizableButton} onClick={this.handleCustomizableButtonsInputChange}>{customizableButton}</Button>)
        })}
      </ButtonGroup>
    )
  }
}
