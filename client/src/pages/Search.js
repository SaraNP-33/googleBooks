import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';


class Search extends Component {
    render() {
        return(
        <Container>
        
        <Jumbotron>
            <h1 className="display-4 text-danger">This is our Jumbotron</h1>
        </Jumbotron>
        </Container>
        )
    }

}


export default Search;