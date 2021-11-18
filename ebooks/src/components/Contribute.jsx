import React from "react";
import { Form, Button } from "react-bootstrap";

export const Contribute = () => {
  return (
    <>
      <Form className="cont-style">
        <h1>How to contribute?</h1>
        <h6>1. Click on the button below.</h6>
        <h6>2. Fill the form details like Book cover Image, Title and Pdf of book</h6>
        <h6> 3. Click on Submit</h6>
        <h6>4. The book will be verified by admin and will be published</h6>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9Xdx_SVEf4shI8iT0adTODG9i0BlXKXK1gmEcL6MzUBQ3oQ/viewform?usp=sf_link" target="_blank" rel="noreferrer"> 
        <Button className="contribute" onClick=""  type="button">
          Contribute
        </Button>
        
        </a>
      </Form>
    </>
  );
};
