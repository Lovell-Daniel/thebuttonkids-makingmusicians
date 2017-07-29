// dependencies
import React from 'react'
// components
import Routes from '../components/Routes'
// utils
import {
  fetchProducts,
  fetchCart,
  fetchCartItems,
  fetchCollections,
  fetchCategories
} from '../utils/api'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      collections: [],
      cart: null,
      cartItems: null
    };
    this.getUpdatedCart = this.getUpdatedCart.bind(this)
  }

  // update state with current cart
  // called by componentDidMount() and after every change to cart
  getUpdatedCart() {
    Promise.all([fetchCart(), fetchCartItems()])
    .then(results => {
      this.setState({
        cart: results[0],
        cartItems: results[1]
      })
    })
  }

  componentDidMount() {
    // update state with lists of products, categories, and collections from API
    // products sometimes needs categories and collections, so loaded together
    Promise.all([fetchProducts(), fetchCategories(), fetchCollections()])
    .then(results => {
      this.setState({
        products: results[0].data,
        categories: results[1].data,
        collections: results[2].data
      })
    })

    // update state with the initial cart
    this.getUpdatedCart()
  }

  render() {
    return (
      <Routes
        // state
        products={this.state.products}
        categories={this.state.categories}
        collections={this.state.collections}
        cart={this.state.cart}
        cartItems={this.state.cartItems}
        // state handler
        getUpdatedCart={this.getUpdatedCart}
      />
    )
  }
}
