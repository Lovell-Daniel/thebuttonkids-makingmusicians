import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

const SIZEBUTTONS = ['All', 'Big Buttons', 'Small Buttons']

export default class SizeButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.handleSizeButtonsInputChange = this.handleSizeButtonsInputChange.bind(this)
  }

  handleSizeButtonsInputChange(e) {
    this.props.handleSizeButtonsInput(e.target.textContent)
  }

  render() {
    return (
      <ButtonGroup>
        {SIZEBUTTONS.map((sizeButton) => {
          if (this.props.selectedSize === sizeButton) {
            return <Button key={sizeButton} active onClick={this.handleSizeButtonsInputChange}>{sizeButton}</Button>
          }
          return <Button key={sizeButton} onClick={this.handleSizeButtonsInputChange}>{sizeButton}</Button>
        })}
      </ButtonGroup>
    )
  }
}
