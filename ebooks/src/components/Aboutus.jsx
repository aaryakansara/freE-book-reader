import React from 'react';
import {Container} from 'react-bootstrap'

export const Aboutus=()=>{
    return(
     <Container className="about">
            <h1>About Us</h1>
            <p>freE-book reader was designed for common people who would struggle to find a normal book-reading website that would include all they wanted in one place. It not only provides you a book, but also if you have something to contribute to us, you are most welcome to do so. It is free, its easy to use and has easy accesses. Create a free account now to download all the books you need. Also by logging in you get to put your preferences and those category books will be at your service. Simply search a book and you can download the book from <a href="/login" >here</a>.
            </p>   
            <p> Reach out to us on this email : freebookreader3@gmail.com 
            </p>
            <p> Have a book and want to contribute to the site? Click <a href="/contribute" >here</a>.  
            </p>
       </Container>
    )
}
