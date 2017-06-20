import React from 'react'
import {Badge} from 'react-bootstrap'

export default class BadgeCartTotal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cartValue = null
    if (!this.props.cart) {
      cartValue = "$0.00"
    } else {
      cartValue = this.props.cart.data.meta.display_price.without_tax.formatted
    }
    return (
      <Badge>
        {cartValue}
      </Badge>
    )
  }
}
