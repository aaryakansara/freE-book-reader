import React from 'react';
import {Form,Button} from 'react-bootstrap'
export const Login=()=>{
    return(
        <>
           <Form className="form-style">
  <h2>Log in here to download books</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Email</Form.Label>
    <Form.Control type="Email" placeholder="Enter your user Email ID" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Enter your password" />
  </Form.Group>
  
  
  <a href="/loggedin" ><Button className="log" variant="primary" type="button" onClick="">
    Login
  </Button>
  </a>

  <a href="/admin" ><Button className="adlog" variant="primary" type="button" onClick="">
    Admin Login
  </Button>
  </a>

  <a href="/forgot">
  <Button className="fog" variant="primary" type="button">
    Forgot Password
  </Button>
  </a>

  </Form>
  <Form className="form-style2">

  <h2>Don't have an account? Create an account for free</h2>
  
  <a href="/account" >
  <Button className="creacc" variant="primary" type="button" onClick="CreateAccount()" >
    Create  a freE-Account
  </Button>
  </a>
  
</Form>
</>
    )
}