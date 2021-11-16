import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function CreateAccount() {
  return (

    <>
     <Form className="account">
     
     <h1>::::::::Create your freE-Account:::::::</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><h6>Name</h6></Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label><h6>Profession</h6></Form.Label>
          <Form.Control type="name" placeholder="You can select your profession here so that we can recommend you related books" />
        </Form.Group>
        
        <Form.Group className="mb-0" controlId="formBasicPreference">
          <Form.Label>Preferences</Form.Label>
          
          <li><select name="preferences">
            <option selected="" value="Default">(Please select any of your three best preferences)</option>
            <option value="Rom">Romance</option>
            <option value="Sci-fi">Science-Fiction</option>
            <option value="Thr">Thriller</option>
            <option value="Adv">Adventure</option>
            <option value="Hor">Horror</option>
            <option value=""></option>
          </select></li>

          <li><select name="preferences">
            <option selected="" value="Default">(----------------Second Preference----------------)</option>
            <option value="Rom">Romance</option>
            <option value="Sci-fi">Science-Fiction</option>
            <option value="Thr">Thriller</option>
            <option value="Adv">Adventure</option>
            <option value="Hor">Horror</option>
          </select></li>

          <li><select name="preferences">
            <option selected="" value="Default">((----------------Third Preference-----------------))</option>
            <option value="Rom">Romance</option>
            <option value="Sci-fi">Science-Fiction</option>
            <option value="Thr">Thriller</option>
            <option value="Adv">Adventure</option>
            <option value="Hor">Horror</option>
          </select></li>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h6>Email</h6></Form.Label>
          <Form.Control type="Email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><h6>Password</h6></Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><h6>Re-enter Password</h6></Form.Label>
          <Form.Control type="password" placeholder="Re-enter your password" />
        </Form.Group>
        
        <Button className="creaccmain" variant="primary" type="submit">
          Create my freE-Account
        </Button>
        
      </Form>
    </>
  );
}
