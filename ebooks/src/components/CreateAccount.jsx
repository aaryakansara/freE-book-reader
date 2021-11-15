import React from 'react';
import {Form,Button} from 'react-bootstrap'
export const CreateAccount =()=>{
    return(
      
        <>
           <Form className="account">
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Your Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Enter a password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Re-enter Password</Form.Label>
    <Form.Control  type="password" placeholder="Re-enter your password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Create my freE-Account
  </Button>
</Form>
</>
    )
}