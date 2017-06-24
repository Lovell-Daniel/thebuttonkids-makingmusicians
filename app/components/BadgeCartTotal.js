// dependencies
import React from 'react'
import {Badge} from 'react-bootstrap'

export default function BadgeCartTotal(props) {
  let cartValue = null
  // display default value if cart hasn't been loaded
  if (!props.cart) {
    cartValue = "$0.00"
  // format the "0" if the cart is empty
  } else if (props.cart.data.meta.display_price.without_tax.formatted == "0") {
    cartValue = "$0.00"
  // otherwise use the supplied, formatted price
  } else {
    cartValue = props.cart.data.meta.display_price.without_tax.formatted
  }
  return (
    <Badge>
      {cartValue}
    </Badge>
  )
}
