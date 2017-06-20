// dependencies
import React from "react";
import {PageHeader, Row, ButtonToolbar, Col, Panel} from 'react-bootstrap';
// components
import CategorySelect from "./CategorySelect";
import CustomizableButtonGroup from "./CustomizableButtonGroup";
import SizeButtonGroup from "./SizeButtonGroup";

export default class ButtonsFilter extends React.Component {
// container for the three inputs for filtering products
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PageHeader>
            What buttons are you looking for?
            <p></p>
            <ButtonToolbar>
              <CategorySelect
                // props
                categories={this.props.categories}
                selectedCategory={this.props.selectedCategory}
                // props handler
                handleCategorySelectInput={this.props.handleCategorySelectInput}
              />
              {" "}
              <CustomizableButtonGroup
                // props
                selectedCustomizable={this.props.selectedCustomizable}
                // props handler
                handleCustomizableButtonsInput={this.props.handleCustomizableButtonsInput}
              />
              {" "}
              <SizeButtonGroup
                // props
                selectedSize={this.props.selectedSize}
                // props handler
                handleSizeButtonsInput={this.props.handleSizeButtonsInput}
              />
            </ButtonToolbar>
          </PageHeader>
        </Col>
      </Row>
    )
  }
}
