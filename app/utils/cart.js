export function calculateShipping(cartItems) {
  // sum the number of items ordered
  const quantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
  // $2 for 10, $4 for 20 ...
  const calculated = Math.ceil(quantity/10)*2

  return (calculated <= 8) ? (calculated) : (8)
}
