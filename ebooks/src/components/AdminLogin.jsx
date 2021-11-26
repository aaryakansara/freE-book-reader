import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function AdminLogin() {
  return (

    <>
     <Form className="admin">
     
     
     <h1 align="center">Admin Login</h1>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label><h6>Title of the Book</h6></Form.Label>
          <Form.Control type="title" placeholder="Enter Title" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label><h6>Image Link</h6></Form.Label>
          <Form.Control type="link" placeholder="Enter Link" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label><h6>e-Book Link</h6></Form.Label>
          <Form.Control type="link" placeholder="Enter Link" required />
        </Form.Group>
        
        <Form.Group className="mb-0" controlId="formBasicPreference">
          <Form.Label>Category</Form.Label>
          
          <li><select name="preferences">
            <option selected="" value="Default" align="center">Belonging Category</option>
            <option value="Adv">Adventure</option>
            <option value="Art">Art</option>
            <option value="Astro">Astronomy</option>
            <option value="Bio">Biography</option>
            <option value="Bus">Business</option>
            <option value="Gonnacry">Comic</option>
            <option value="Crime">Crime</option>
            <option value="Dra">Drama</option>            
            <option value="Fic">Fiction</option>
            <option value="Geo">Geology</option>
            <option value="Guide">Guides</option>
            <option value="His">History</option>
            <option value="Hor">Horror</option>
            <option value="Lit">Literatures</option>
            <option value="Non">Non-Fiction</option>
            <option value="Poet">Poetry</option>
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
        
            
        <Button className="addbook" variant="primary" type="submit" >
          Add Book
        </Button>
        
        <a href="/loggedin">
        <Button className="backtologgedin" variant="primary" type="button" >
          Home Page
        </Button>
        </a>
        
      </Form>
    </>
  );
}