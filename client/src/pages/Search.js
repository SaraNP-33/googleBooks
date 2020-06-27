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
    
    //function to connect to the axios call and carry the query to google books api
    searchBooks = bookTitle=>{
        API.Random(bookTitle)
        // .then(res=>console.log(res))
        .then((res)=>{this.setState({results:res.data.items})
                        console.log(this.state.results)
    }
        )
        .catch(err=>console.log(err))

    }
//function to have what is written in the search input to be tracked
    handleInputChange =(event) =>{
        const {name,value} =event.target

        this.setState({
            [name]:value
        });
    };
    //function to when we hit the button our search param is sent to our query and gives back the books results.
    handleSubmitSearch=(event) =>{
        event.preventDefault();
       this.searchBooks(this.state.search)

    };
    //allow user to save a book
    // eslint-disable-next-line
    handleSaveBook= function(id){
     
        const bookToSave= {
            src:this.state.results.volumeInfo.imageLinks.thumbnail,
            title:this.state.results.volumeInfo.title,
            author:this.state.results.volumeInfo.authors,
            description:this.state.results.volumeInfo.description,
            link:this.state.results.volumeInfo.infoLink
        };
        console.log("click saveBtn")
        API.saveBook(bookToSave)
        .then((res)=>console.log(res))
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
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            onClick={this.handleSaveBook}
            />
            ))}
        </ResultsContainer>
        </Container>
        )
    }

}


export default Search;