import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';

class Saved extends Component {
    render() {
        return(
        <>
        <Container>
        <Jumbotron>
            <h1 className="display-4">This is our Jumbotron2</h1>
        </Jumbotron>
        </Container>
        </>
        )
    }
}


export default Saved;