import React from 'react';
import {Button, Container} from 'react-bootstrap'

export const Congrats=()=>{
    return(
     <Container className="instructions">
            <h1>Congratulations, you have successfully created your own freE-book account.</h1>
            <h2>You can try logging in now to download your favourite books. Still for free.</h2>
            <a href="/login">
            <Button className="backtologin" type="button">Login</Button>    
            </a>
       </Container>
    )
}
