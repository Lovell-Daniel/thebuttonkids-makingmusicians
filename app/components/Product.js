// dependencies
import React from "react";
import {
  Col,
  Thumbnail,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap"
// utils
import {fetchFile, addToCart} from "../utils/api.js"

export default class Item extends React.Component {
// displays the details for a product
// keeps track of its own quantity field
  constructor(props) {
    super(props);
    this.state = {
      image: 'http://chimplyimage.appspot.com/images/samples/classic-spinner/indicator.gif',
      quantity: ''
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this)
  }

  componentDidMount() {
    // get the image for the product
    fetchFile(this.props.product.relationships.files.data[0].id).then((file) => {
      this.setState(() => {
        return {image: file.data.link.href}
      })
    })
  }

  // handles changes to quantity field
  handleQuantityChange(e) {
    this.setState({quantity: e.target.value})
  }

  // handles clicks on "Add to Cart" button
  handleAddToCartClick() {
    // don't do anything unless there is a useful value
    if (this.state.quantity > 0) {
      // calls util that sends product and quantity to API
      addToCart(this.props.product.id, this.state.quantity).then((cart) => {
        // resets the form
        this.setState({quantity: ''})
        // sends request to parent component to update state with new cart
        this.props.getUpdatedCart()
      })
    }
  }

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Thumbnail src={this.state.image}>
          <p>{this.props.product.name}</p>
          <p>{this.props.product.meta.display_price.without_tax.formatted}</p>
          <Form inline>
            <FormGroup bsSize="small" controlId={this.props.product.id}>
              <ControlLabel>Quantity:</ControlLabel>
              {" "}
              <FormControl type="number" placeholder="0" value={this.state.quantity} onChange={this.handleQuantityChange}/>
            </FormGroup>
            <Button bsSize="small" type="button" onClick={this.handleAddToCartClick}>Add to Cart</Button>
          </Form>
        </Thumbnail>
      </Col>
    )
  }
}
