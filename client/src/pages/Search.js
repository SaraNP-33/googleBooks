import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Search from "../components/Search"


class SearchBooks extends Component {
    //initial state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function for search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function for submit button on search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through array 
                    results = results.map(result => {
                        //store each book in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset state
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        console.log(event.target.id)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        console.log(savedBooks)
        API.saveBook(savedBooks)
        .then(this.setState({ message: alert("Your book is saved") })).catch(err => console.log("ERROR", err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Google Books Search</h1>
                    <h3 className="text-white">Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <Form
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Search books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SearchBooks