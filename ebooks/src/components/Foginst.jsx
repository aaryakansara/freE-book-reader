import React from 'react';
import {Button, Container} from 'react-bootstrap'

export const Foginst=()=>{
    return(
     <Container className="instructions">
            <h1>We've received your request</h1>
            <p>freE-book reader was designed for common people who would struggle to find a normal book-reading website that would include all they wanted in one place. It not only provides you a book, but also if you have something to contribute to us, you are most welcome to do so. It is free, its easy to use and has easy accesses. Create a free account now to download all the books you need. Also by logging in you get to put your preferences and those category books will be at your service. Simply search a book and you can download the book from <a href="/login" >here</a>.
            </p>   
            <h5> We will send you an email shortly with a link to reset your password. Stay tuned, and happy freE-booking.  
                
            </h5>
            <a href="/home">
            <Button className="backhome" type="button">Back to Home Page</Button>    
            </a>
       </Container>
    )
}
