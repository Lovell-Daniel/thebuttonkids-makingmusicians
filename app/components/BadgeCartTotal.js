// dependencies
import React from 'react'
import {Badge} from 'react-bootstrap'

export default class BadgeCartTotal extends React.Component {
// display cart subtotal as a badge
  render() {
      let cartValue = null
      // display default value if cart hasn't been loaded
      if (!this.props.cart) {
        cartValue = "$0.00"
      // format the "0" if the cart is empty
      } else if (this.props.cart.data.meta.display_price.without_tax.formatted == "0") {
        cartValue = "$0.00"
      // otherwise use the supplied, formatted price
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
