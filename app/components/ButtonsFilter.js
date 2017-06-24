// dependencies
import React from "react";
import {PageHeader, Row, ButtonToolbar, Col, Panel} from 'react-bootstrap';
// components
import CategorySelect from "./CategorySelect";
import CustomizableButtonGroup from "./CustomizableButtonGroup";
import SizeButtonGroup from "./SizeButtonGroup";

export default function ButtonsFilter(props) {
// container for the three inputs for filtering products
  return (
    <Row>
      <Col xs={12}>
        <PageHeader>
          What buttons are you looking for?
          <p></p>
          <ButtonToolbar>
            <CategorySelect
              // props
              categories={props.categories}
              selectedCategory={props.selectedCategory}
              // props handler
              handleCategorySelectInput={props.handleCategorySelectInput}
            />
            {" "}
            <CustomizableButtonGroup
              // props
              selectedCustomizable={props.selectedCustomizable}
              // props handler
              handleCustomizableButtonsInput={props.handleCustomizableButtonsInput}
            />
            {" "}
            <SizeButtonGroup
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
