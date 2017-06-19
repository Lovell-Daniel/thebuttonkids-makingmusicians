import React from "react";
import {Col, Thumbnail} from "react-bootstrap"
import {fetchFile} from "../utils/api.js"

export default class Button extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      image: 'http://chimplyimage.appspot.com/images/samples/classic-spinner/indicator.gif'
    };
  }

  componentDidMount() {
    fetchFile(this.props.product.relationships.files.data[0].id).then((file) => {
      this.setState(() => {
        return {
          image: file.data.link.href
        }
      })
    })
  }


  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Thumbnail src={this.state.image}>
          <p>{this.props.product.name}</p>
          <p>{this.props.product.meta.display_price.without_tax.formatted}</p>
          <form>
            <input type="number" />
            <button>Add to Cart</button>
          </form>
        </Thumbnail>
      </Col>
    )
  }
}
