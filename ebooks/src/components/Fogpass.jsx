import React from 'react';
import {Form,Button} from 'react-bootstrap'
export const Fogpass=()=>{
    return(
        <>
           <Form className="fogpass">
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter your Email" />
    
  </Form.Group>

  
  
  <a href="/foginst" >
  <Button className="submit" variant="primary" type="button" onClick="" >
    Submit
  </Button>
  </a>
  
</Form>
</>
    )
}