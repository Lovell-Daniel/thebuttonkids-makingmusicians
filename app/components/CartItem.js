// dependecies
import React from 'react'

export default function CartItem(props) {
  return <div>
    {props.cartItem.name}{' '}
    {props.cartItem.quantity}{' '}
    {props.cartItem.meta.display_price.without_tax.unit.formatted}{' '}
    {props.cartItem.meta.display_price.without_tax.value.formatted}
  </div>
}
