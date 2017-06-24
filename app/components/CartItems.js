// dependecies
import React from 'react'
// components
import CartItem from './CartItem'

export default function CartItems(props) {
  return (
    <div>
      {
        (props.cartItems)
          ? (props.cartItems.data.map(cartItem => {return <CartItem key={cartItem.id} cartItem={cartItem} />}))
          : (<div>No Cart Found</div>)
      }
    </div>
  )
}
