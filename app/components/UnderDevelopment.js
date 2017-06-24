// dependencies
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default class UnderDevelopment extends React.Component {
// alerts that the page isn't ready for orders
  constructor(props) {
    super(props)
    this.state = {
      showModal: true
    }
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <p>This website is under development and not able to accept orders.</p>
        </Modal.Header>
      </Modal>
    )
  }
}
