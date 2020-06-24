import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import { Input, FormBtn } from '../components/Form';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';


class Search extends Component {
    render() {
        return(
        <Container>
        
        <Jumbotron>
            <h3 className="display-4">Google Books Search</h3>
            <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <SearchContainer>
           <Input/>
           <FormBtn>Search</FormBtn>
        </SearchContainer>
        <ResultsContainer/>
        </Container>
        )
    }

}


export default Search;