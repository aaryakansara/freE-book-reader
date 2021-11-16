import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function CreateAccount() {
  return (

    <>
     <Form className="account">
     
     <h1>____Create your freE-Account____</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Profession</Form.Label>
          <Form.Control type="name" placeholder="You can select your profession here so that we can recommend you related books" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPreference">
          <Form.Label>Preferences</Form.Label>
          <Form.Control type="preference" placeholder="Select any three of your preferences" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPreference">
          <Form.Label>Preference 2</Form.Label>
          <Form.Control type="preference" placeholder="Preference 2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPreference">
          <Form.Label>Preference 3</Form.Label>
          <Form.Control type="preference" placeholder="Preference 3" />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter your password" />
        </Form.Group>
        
        <Button className="creaccmain" variant="primary" type="submit">
          Create my freE-Account
        </Button>
        
      </Form>
    </>
  );
}
