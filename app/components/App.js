// dependencies
import React from 'react'
import {HashRouter as Router, NavLink, Route, Switch, Redirect} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// components
import Products from './Products'
import Cart from './Cart'
import FAQ from './FAQ'
import Subscribe from './Subscribe'
import Contact from './Contact'
import BadgeCartTotal from './BadgeCartTotal.js'
import UnderDevelopment from './UnderDevelopment.js'
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
      <Router>
        <div>
          {/* announce that the site is under development */}
          <UnderDevelopment></UnderDevelopment>

          {/* nav menu using react-router v4, react-bootstrap, and react-router-bootstrap */}
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/">The Button Kids</NavLink>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/buttons">
                  <NavItem eventKey={1}>Buttons</NavItem>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavItem eventKey={2}>FAQ</NavItem>
                </LinkContainer>
                <LinkContainer to="/subscribe">
                  <NavItem eventKey={3}>Subscribe</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem eventKey={4}>Contact</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <LinkContainer to="/cart">
                  <NavItem eventKey={5}>Cart{" "}
                    <BadgeCartTotal cart={this.state.cart}/>
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* define routes and related components */}
          <Switch>
            <Route exact path="/buttons" render={(props) =>
              <Products
                // state
                products={this.state.products}
                categories={this.state.categories}
                collections={this.state.collections}
                cart={this.state.cart}
                // state handler
                getUpdatedCart={this.getUpdatedCart}
              />}
            />
            <Route exact path="/faq" component={FAQ}/>
            <Route exact path="/subscribe" component={Subscribe}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/cart" component={(props) =>
              <Cart
                // state
                cart={this.state.cart}
                cartItems={this.state.cartItems}
                // state handler
                getUpdatedCart={this.getUpdatedCart}
              />}
            />
            <Redirect from="/" to="/buttons"/>
          </Switch>
        </div>
      </Router>
    )
  }
}
