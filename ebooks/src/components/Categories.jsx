import React,{useState} from "react";
import {Card, Button, Row, Col, Form, FormControl} from "react-bootstrap";
import "./Styles.css";



export const Categories = () => {
  const categories = [
    {
      image: "./cats/romance.png",
      title: "Romance",
      link: "/catrom",
    },
    {
      image: "./cats/fiction.png",
      title: "Fiction",
      link: "/catfiction",
    },
    {
        image: "./cats/suspense.png",
        title: "Suspense",
        link: "/catsus",
    },
    {
      image: "./cats/sci-fiction.png",
      title: "Sci-fi",
      link: "/catscifi",
    },
    {
      image: "./cats/adventure.png",
      title: "Adventure",
      link: "/catadv",
    },
    {
        image: "./cats/horror.png",
        title: "Horror",
        link: "/cathorror",
    },
    {
        image: "./cats/drama.png",
        title: "Drama",
        link: "/catdrama",
    },
    {
      image: "./cats/thriller.png",
      title: "Thriller",
      link: "/catthrill",
    },
    {
        image: "./cats/non-fi.png",
        title: "Non-Fiction",
        link: "/catnonfic",
    }, 
    {
        image: "./cats/geology.png",
        title: "Geology",
        link: "/catgeo",
    },
    {
        image: "./cats/history.png",
        title: "History",
        link: "/cathistory",
    },
    {
      image: "./cats/poetry.png",
      title: "Poetry",
      link: "/catpoet",
  },
    {
      image: "./cats/literature.png",
      title: "English-Literature",
      link: "/catlit",
    },
    {
      image: "./cats/arts.png",
      title: "Arts",
      link: "/catarts",
    },
    {
      image: "./cats/comics.png",
      title: "Comics",
      link: "/catcomic",
    },
    {
      image: "./cats/biography.png",
      title: "Biography",
      link: "/catbio",
    },
    {
      image: "./cats/astro.png",
      title: "Astronomy",
      link: "/catastro",
    },
    {
      image: "./cats/bandeco.png",
      title: "Business & Economics",
      link: "/catbusiness",
    },
    {
      image: "./cats/crime.png",
      title: "Crime",
      link: "/catcrime",
    },
    {
      image: "./cats/science.png",
      title: "Science",
      link: "/catsci",
    },
    {
      image: "./cats/guides.png",
      title: "Guides",
      link: "/catguide",
    },
    
    {
      image: "./cats/sports.png",
      title: "Sports",
      link: "/catsport",
    },
    {
      image: "./cats/psych.png",
      title: "Psychology",
      link: "/catpsych",
    },
    {
      image: "./cats/travel.png",
      title: "Travel",
      link: "/cattravel",
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
        <Card style={{ width: "18rem" }} className="cats">
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
