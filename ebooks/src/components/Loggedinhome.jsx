import React,{useState} from "react";
import {Card, Button, Row, Col, Form, FormControl} from "react-bootstrap";
import "./Styles.css";



export const Loggedinhome = () => {
  const logInfo = [
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
    {
      image: "./books/adventure.png",
      title: "Adventure 1",
      link: "https://drive.google.com/file/d/15KK3xNeGAgDd1z4pV3Qgb3fQuB79_7bg/view?usp=sharing",
    },
    
    {
      image: "./books/adventure.png",
      title: "Adventure 2",
      link: "https://drive.google.com/file/d/1SOovhoTNzxgQTdDhc9NLh0tE6lymhmKo/view?usp=sharing",
    },
    {
      image: "./books/drama.png",
      title: "Drama 1",
      link: "https://drive.google.com/file/d/1Lbz9UWAETBqOiuUuX0a2_bfiB2VUIFb4/view?usp=sharing",
    },
    
    {
      image: "./books/drama.png",
      title: "Drama 2",
      link: "https://drive.google.com/file/d/1gxZH8q8z5lxp80q_yLFaOEY8LOX8EekT/view?usp=sharing",
    },
    {
      image: "./books/fiction.png",
      title: "Fiction 1",
      link: "https://drive.google.com/file/d/1nYbpDSawRFccQzp6HpTHQePqXKZ0f4jh/view?usp=sharing",
    },
    
    {
      image: "./books/fiction.png",
      title: "Fiction 2",
      link: "https://drive.google.com/file/d/1W4PT6xFiAnCXMJKkcpdD6tHe8HrF0iKw/view?usp=sharing",
    },
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
    {
      image: "./books/romance.png",
      title: "Romance 1",
      link: "https://drive.google.com/file/d/1XVFUMx0UOt7iWt8u5x65F6sVCd7PN2nl/view?usp=sharing",
    },
    
    {
      image: "./books/romance.png",
      title: "Romance 2",
      link: "https://drive.google.com/file/d/1Qp7Fk2INX8XTkYBn6BeNMk41UkJojus0/view?usp=sharing",
    },
    {
      image: "./books/scifi.png",
      title: "Science-Fiction 1",
      link: "https://drive.google.com/file/d/1cGBKfK8y-G7qVcqEOSHxE-9D9IwLCJDc/view?usp=sharing",
    },
    
    {
      image: "./books/scifi.png",
      title: "Science-Fiction 2",
      link: "https://drive.google.com/file/d/1HRM1kcNbkd0ynZon9PLjllKbrAIsPCIb/view?usp=sharing",
    },
    {
      image: "./books/suspense.png",
      title: "Suspense 1",
      link: "https://drive.google.com/file/d/1or9n8Tbk_ERSz2YkHNZUOaZpm2hYk5RH/view?usp=sharing",
    },
    
    {
      image: "./books/suspense.png",
      title: "Suspense 2",
      link: "https://drive.google.com/file/d/1HvoYWzfu037igDrIhNObHj6Be-PJ-XQe/view?usp=sharing",
    },
    {
      image: "./books/thriller.png",
      title: "Thriller 1",
      link: "https://drive.google.com/file/d/1OS9qoKDaZu4x8owk8VX__USaO7sh2V59/view?usp=sharing",
    },
    
    {
      image: "./books/thriller.png",
      title: "Thriller 2",
      link: "https://drive.google.com/file/d/1R9yTZ1Nk5TQEtuPsgtZhbzO9pLhZI-ZX/view?usp=sharing",
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
      <Button variant="outline-success" type="submit">Search</Button>
      </Form>
      {logInfo.filter((card)=> {
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
