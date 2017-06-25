// dependecies
import React from 'react'
// utils
import {calculateShipping} from '../utils/cart.js'

export default function(props) {
  let shipping = 0
  let total = 0

  if (props.cartItems && props.cartItems.data) {
    shipping = calculateShipping(props.cartItems.data)
    total = shipping + props.cartItems.meta.display_price.without_tax.amount/100
  }

  return (
    <div>
      <div>Shipping and Handling: ${shipping.toFixed(2)}</div>
      <div>Total: ${total.toFixed(2)}</div>
    </div>
  )
}