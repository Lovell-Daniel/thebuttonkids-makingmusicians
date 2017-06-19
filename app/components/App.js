import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch, Redirect} from 'react-router-dom';
import Buttons from './Buttons';
import Cart from './Cart';
import FAQ from './FAQ';
import Subscribe from './Subscribe';
import Contact from './Contact';
import {fetchProducts, fetchCart, fetchCollections, fetchCategories} from '../utils/api';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      collections: [],
      cart: {}
    };
  }

  componentDidMount() {
    Promise.all([fetchProducts(), fetchCategories(), fetchCollections()])
      .then(results => {
        this.setState(() => {
          return {
            products: results[0].data,
            categories: results[1].data,
            collections: results[2].data
          }
        })
      })

    fetchCart().then((cart) => {
      this.setState(() => {
        return {cart: cart.data}
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
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
                  <NavItem eventKey={5}>Cart</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/buttons" render={(props) =>
              <Buttons
                products={this.state.products}
                categories={this.state.categories}
                collections={this.state.collections}
                cart={this.state.cart}
              />
            }/>
            <Route exact path="/cart" component={(props) =>
              <Cart
                cart={this.state.cart}
              />
            }/>
            <Route exact path="/faq" component={FAQ}/>
            <Route exact path="/subscribe" component={Subscribe}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect from="/" to="/buttons"/>
          </Switch>
        </div>
      </Router>
    )
  }
}
