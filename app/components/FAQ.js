// dependencies
import React from "react";
import {PageHeader, Grid, ListGroup, ListGroupItem} from "react-bootstrap";

export default function FAQ() {
  return (
    <Grid>
      <PageHeader>
        Frequently Asked Questions
      </PageHeader>
      <ListGroup>
        <ListGroupItem header="How much do buttons cost?">They cost money.</ListGroupItem>
        <ListGroupItem header="How much does shipping cost?">It costs money.</ListGroupItem>
        <ListGroupItem header="How are the buttons shipped?">They are shipped well.</ListGroupItem>
        <ListGroupItem header="Are the buttons customizable?">Some are.</ListGroupItem>
        <ListGroupItem header="What payments types are accepted?">Many</ListGroupItem>
        <ListGroupItem header="How long until I get my order?">It depends.</ListGroupItem>
        <ListGroupItem header="What are the button sizes?">Big buttons are 2.25 inches. Small are 1.25 inches.</ListGroupItem>
      </ListGroup>
    </Grid>
  )
}
