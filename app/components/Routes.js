// dependencies
import React from 'react'
import {HashRouter as Router, NavLink, Route, Switch, Redirect} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// components
import UnderDevelopment from './UnderDevelopment'
import ProductsContainer from '../containers/ProductsContainer'
import Cart from './Cart'
import FAQ from './FAQ'
import Subscribe from './Subscribe'
import Contact from './Contact'
import BadgeCartTotal from './BadgeCartTotal.js'

export default function Routes(props) {
  return (
    <Router>
      <div>
        {/* announce that the site is under development */}
        <UnderDevelopment />
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
                  <BadgeCartTotal cart={props.cart}/>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* define routes and related components */}
        <Switch>
          <Route exact path="/buttons" render={routeProps => (
            <ProductsContainer
              // state
              products={props.products}
              categories={props.categories}
              collections={props.collections}
              cart={props.cart}
              // state handler
              getUpdatedCart={props.getUpdatedCart}
            />
          )}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/subscribe" component={Subscribe}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/cart" render={routeProps => (
            <Cart
              // state
              cart={props.cart}
              cartItems={props.cartItems}
              // state handler
              getUpdatedCart={props.getUpdatedCart}
            />
          )}/>
          <Redirect from="/" to="/buttons"/>
        </Switch>
      </div>
    </Router>
  )
}
