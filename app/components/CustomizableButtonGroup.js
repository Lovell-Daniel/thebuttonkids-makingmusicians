import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const CUSTOMIZABLEBUTTONS = ['All', 'Customizable', 'Not Customizable']

export default class CustomizableButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.handleCustomizableButtonsInputChange = this.handleCustomizableButtonsInputChange.bind(this)
  }

  handleCustomizableButtonsInputChange(e) {
    this.props.handleCustomizableButtonsInput(e.target.textContent)
  }

  render() {
    return (
      <ButtonGroup>
        {CUSTOMIZABLEBUTTONS.map((customizableButton) => {
          if (this.props.selectedCustomizable === customizableButton) {
            return <Button key={customizableButton} active onClick={this.handleCustomizableButtonsInputChange}>{customizableButton}</Button>
          }
          return <Button key={customizableButton} onClick={this.handleCustomizableButtonsInputChange}>{customizableButton}</Button>
        })}
      </ButtonGroup>
    )
  }
}
