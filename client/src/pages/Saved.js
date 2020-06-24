import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import SavedContainer from '../components/SavedContainer';


class Saved extends Component {
    render() {
        return(
        <Container>
        
        <Jumbotron>
            <h3 className="display-4">Google Books Search</h3>
            <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <SavedContainer/>
        </Container>
        )
    }

}


export default Saved;