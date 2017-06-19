import React from "react";
import CategorySelect from "./CategorySelect";
import CustomizableButtonGroup from "./CustomizableButtonGroup";
import SizeButtonGroup from "./SizeButtonGroup";
import { PageHeader, Row, ButtonToolbar, Col, Panel } from 'react-bootstrap';

export default class ButtonsFilter extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PageHeader>
            What buttons are you looking for?
            <p></p>
            <ButtonToolbar>
              <CategorySelect
                categories={this.props.categories}
                selectedCategory={this.props.selectedCategory}
                handleCategorySelectInput={this.props.handleCategorySelectInput}
              />
              {" "}
              <CustomizableButtonGroup
                selectedCustomizable={this.props.selectedCustomizable}
                handleCustomizableButtonsInput={this.props.handleCustomizableButtonsInput}
              />
              {" "}
              <SizeButtonGroup
                selectedSize={this.props.selectedSize}
                handleSizeButtonsInput={this.props.handleSizeButtonsInput}
              />
            </ButtonToolbar>
          </PageHeader>
        </Col>
      </Row>
    )
  }
}
