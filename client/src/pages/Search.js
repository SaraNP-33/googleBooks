import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import { Input, FormBtn } from '../components/Form';
import SearchContainer from '../components/SearchContainer';
import ResultsContainer from '../components/ResultsContainer';
import BookCard from '../components/BookCard';
import API from '../utils/API';


class Search extends Component {
    state= {
        search:"Oz",
        results:[]
    };
    
    searchBooks = bookTitle=>{
        API.Random(bookTitle)
        // .then(res=>console.log(res))
        .then((res)=>{this.setState({results:res.data.items})
                        console.log(this.state.results)
    }
        )
        .catch(err=>console.log(err))

    }

    handleInputChange =(event) =>{
        const {name,value} =event.target

        this.setState({
            [name]:value
        });
    };
    handleSubmitSearch=(event) =>{
        event.preventDefault();
       this.searchBooks(this.state.search)

    }
    
    
    render() {
        return(
        <Container>
        
        <Jumbotron>
            <h3 className="display-4">Google Books Search</h3>
            <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <SearchContainer>
           <Input
           value={this.state.search}
           onChange={this.handleInputChange}
           name="search"
           />
           <FormBtn 
           onClick={this.handleSubmitSearch}/>
        </SearchContainer>
        <ResultsContainer>
            {this.state.results.map((book)=>(
            <BookCard
            key={book.id}
            src={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.author}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            />
            ))}
        </ResultsContainer>
        </Container>
        )
    }

}


export default Search;