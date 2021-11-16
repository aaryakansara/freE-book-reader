import React,{useState} from "react";
import {Card, Button, Row, Col, Form, FormControl} from "react-bootstrap";
import "./Styles.css";



export const Categories = () => {
  const categories = [
    {
      image: "./cats/romance.png",
      title: "Romance",
      link: "",
    },
    {
      image: "./cats/fiction.png",
      title: "Fiction",
      link: "",
    },
    {
        image: "./cats/suspense.png",
        title: "Suspense",
        link: "",
    },
    {
      image: "./cats/sci-fiction.png",
      title: "Sci-fi",
      link: "",
    },
    {
      image: "./cats/adventure.png",
      title: "Adventure",
      link: "",
    },
    {
        image: "./cats/horror.png",
        title: "Horror",
        link: "",
    },
    {
        image: "./cats/drama.png",
        title: "Drama",
        link: "",
    },
    {
      image: "./cats/thriller.png",
      title: "Thriller",
      link: "",
    },
    {
        image: "./cats/non-fi.png",
        title: "Non-Fiction",
        link: "",
    }, 
    {
        image: "./cats/geology.png",
        title: "Geology",
        link: "",
    },
    {
        image: "./cats/history.png",
        title: "History",
        link: "",
    },
    {
      image: "./cats/poetry.png",
      title: "Poetry",
      link: "",
  },
    {
      image: "./cats/literature.png",
      title: "English-Literature",
      link: "",
    },
    {
      image: "./cats/fantasy.png",
      title: "Fantasy",
      link: "",
    },

  ];

  
 const [searchTerm, setSearchTerm] = useState('')
  return (
    
    <Row>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search Categories"
        className="searchbox"
        aria-label="Search"
       onChange={event =>{setSearchTerm(event.target.value)} }/>
      <Button variant="outline-success" type="button">Search</Button>
      </Form>
      {categories.filter((card)=> {
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
              <Button className="cat-button">Check Out</Button>
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
