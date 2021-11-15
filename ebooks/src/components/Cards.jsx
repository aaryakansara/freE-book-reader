import React,{useState} from "react";
import {Card, Button, Row, Col, Form, FormControl} from "react-bootstrap";
import "./complete.css";



export const Cards = () => {
  const cardInfo = [
    {
      image: "./books/dotnet.png",
      title: ".NET Framework",
      link: "https://books.goalkicker.com/DotNETFrameworkBook/DotNETFrameworkNotesForProfessionals.pdf",
    },
    {
      image: "./books/Algorithms.png",
      title: "Algorithms",
      link: "https://books.goalkicker.com/AlgorithmsBook/AlgorithmsNotesForProfessionals.pdf",
    },
    {
      image: "./books/Android.png",
      title: "Android",
      link: "https://books.goalkicker.com/AndroidBook/AndroidNotesForProfessionals.pdf",
    },
    {
      image: "./books/Algorithms.png",
      title: "Algorithms",
      link: "https://books.goalkicker.com/AlgorithmsBook/AlgorithmsNotesForProfessionals.pdf",
    },
    {
      image: "./books/Android.png",
      title: "Android",
      link: "https://books.goalkicker.com/AndroidBook/AndroidNotesForProfessionals.pdf",
    },
    {
      image: "./books/dotnet.png",
      title: ".NET Framework",
      link: "https://books.goalkicker.com/DotNETFrameworkBook/DotNETFrameworkNotesForProfessionals.pdf",
    },
    {
      image: "./books/Android.png",
      title: "Android",
      link: "https://books.goalkicker.com/AndroidBook/AndroidNotesForProfessionals.pdf",
    },
    {
      image: "./books/Algorithms.png",
      title: "Algorithms",
      link: "https://books.goalkicker.com/AlgorithmsBook/AlgorithmsNotesForProfessionals.pdf",
    },
    
  ];

  
 const [searchTerm, setSearchTerm] = useState('')
  return (
    
    <Row>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="searchbox"
        aria-label="Search"
       onChange={event =>{setSearchTerm(event.target.value)} }/>
      <Button variant="outline-success">Search</Button>
      </Form>
      {cardInfo.filter((card)=> {
        if(searchTerm === "") {
          return card.title ;
        }else if(card.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return card.title;
        }
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
