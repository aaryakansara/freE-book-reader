import React from 'react';
import {Form,Button} from 'react-bootstrap'
export const Login=()=>{
    return(
        <>
           <Form className="form-style">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Enter password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>

  <Button variant="primary" type="submit" onClick="CreateAccount()" >
    Create  a freE-Account
  </Button>
</Form>
</>
    )
}