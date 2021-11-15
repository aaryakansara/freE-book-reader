import React from "react";
import { Form, Button } from "react-bootstrap";

export const Contribute = () => {
  return (
    <>
      <Form className="form-style">
        <h1>How to contribute?</h1>
        <h6>1. Click on the button below.</h6>
        <h6>2. Fill the form details like Book cover Image, Title and Pdf of book</h6>
        <h6> 3. Click on Submit</h6>
        <h6>4. The book will be verified by admin and will be published</h6>
        <a href = "https://docs.google.com/forms/d/e/1FAIpQLScdc8hEmI3YZM38VdwouGIxnkAoD9m3AAottpO7tGKdEwh0MA/viewform?usp=sf_link"> 
        <Button className="contribute" onClick="window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScdc8hEmI3YZM38VdwouGIxnkAoD9m3AAottpO7tGKdEwh0MA/viewform?usp=sf_link'" target="_blank" type="submit">
          Contribute
        </Button>
        </a>
      </Form>
    </>
  );
};
