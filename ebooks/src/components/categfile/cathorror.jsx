import React,{useState} from "react";
import {Card, Button, Row, Col, Form, FormControl} from "react-bootstrap";
import "./Styles.css";



export const Cathorror = () => {
  const cardInfo = [
    {
      image: "./books/horror.png",
      title: "Horror 1",
      link: "https://drive.google.com/file/d/1NYHnXBdUsbvdJ_oUbIv7vNCjhbOoN__5/view?usp=sharing",
    },
    
    {
      image: "./books/horror.png",
      title: "Horror 2",
      link: "https://drive.google.com/file/d/15sCpwAqiyHKF-aFJBNrAjSk2FAYDdtEJ/view?usp=sharing",
    },
    
  ];

  
 const [searchTerm, setSearchTerm] = useState('')
  return (
    
    <Row>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search  (Try to type in the exact name of the book you want to search)"
        className="searchbox"
        aria-label="Search"
       onChange={event =>{setSearchTerm(event.target.value)} }/>
      <Button variant="outline-success" type="button">Search</Button>
      </Form>
      {cardInfo.filter((card)=> {
        if(searchTerm === "") {
          return card.title ;
        }else if(card.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return card.title;
        }
        return 0;
      }).map((card,key)=>{ 
        return (
        <>
      {
      <Col md="3">
        <Card style={{ width: "18rem" }} className="cards">
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title className="card-title">{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <a href={card.link}>
              <Button className="card-button">Download</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
        
        
      }
       </>

        

          );
           })}
      
    </Row>
  )
};
