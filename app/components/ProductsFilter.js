// dependencies
import React from "react";
import {PageHeader, Row, ButtonToolbar, Col, Panel} from 'react-bootstrap';
// components
import SelectCategory from "./SelectCategory";
import SelectCustomizable from "./SelectCustomizable";
import SelectSize from "./SelectSize";

export default function ButtonsFilter(props) {
// container for the three inputs for filtering products
  return (
    <Row>
      <Col xs={12}>
        <PageHeader>
          What buttons are you looking for?
          <p></p>
          <ButtonToolbar>
            <SelectCategory
              // props
              categories={props.categories}
              selectedCategory={props.selectedCategory}
              // props handler
              handleCategorySelectInput={props.handleCategorySelectInput}
            />
            {" "}
            <SelectCustomizable
              // props
              selectedCustomizable={props.selectedCustomizable}
              // props handler
              handleCustomizableButtonsInput={props.handleCustomizableButtonsInput}
            />
            {" "}
            <SelectSize
              // props
              selectedSize={props.selectedSize}
              // props handler
              handleSizeButtonsInput={props.handleSizeButtonsInput}
            />
          </ButtonToolbar>
        </PageHeader>
      </Col>
    </Row>
  )
}
