import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function CreateAccount() {
  return (

    <>
     <Form className="account">
     
     
     <h1>::::::::Create your freE-Account:::::::</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><h6>Name</h6></Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" required />
         
           
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label><h6>Profession</h6></Form.Label>
          <Form.Control type="name" placeholder="You can select your profession here so that we can recommend you related books" />
        </Form.Group>
        
        <Form.Group className="mb-0" controlId="formBasicPreference">
          <Form.Label>Preferences</Form.Label>
          
          <li><select name="preferences">
            <option selected="" value="Default">(Please select any of your three best preferences)</option>
            <option value="Adv">Adventure</option>
            <option value="Art">Art</option>
            <option value="Astro">Astronomy</option>
            <option value="Bio">Biography</option>
            <option value="Bus">Business</option>
            <option value="Gonnacry">Comic</option>
            <option value="Crime">Crime</option>
            <option value="Dra">Drama</option>
          </select></li>

          <li><select name="preferences">
            <option selected="" value="Default">(----------------Second Preference----------------)</option>
            <option value="Fic">Fiction</option>
            <option value="Geo">Geology</option>
            <option value="Guide">Guides</option>
            <option value="His">History</option>
            <option value="Hor">Horror</option>
            <option value="Lit">Literatures</option>
            <option value="Non">Non-Fiction</option>
            <option value="Poet">Poetry</option>
          </select></li>

          <li><select name="preferences">
            <option selected="" value="Default">((----------------Third Preference-----------------))</option>
            <option value="Pysch">Psychology</option>
            <option value="Rom">Romance</option>
            <option value="Sci">Science</option>
            <option value="Sci-fi">Science-Fiction</option>
            <option value="Sport">Sports</option>
            <option value="Sus">Suspense</option>
            <option value="Thr">Thriller</option>
            <option value="Travel">Travels</option>
            
            
            
          </select></li>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h6>Email</h6></Form.Label>
          <Form.Control type="Email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><h6>Password</h6></Form.Label>
          <Form.Control type="password" placeholder="Enter a password for your account" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><h6>Re-enter Password</h6></Form.Label>
          <Form.Control type="password" placeholder="Re-enter your password" required/>
        </Form.Group>
        <a href="/congrats">
        <Button className="creaccmain" variant="primary" type="button" >
          Create my freE-Account
        </Button>
        </a>
        
      </Form>
    </>
  );
}
