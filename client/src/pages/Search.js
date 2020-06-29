import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Search from "../components/Search";
import Nav from "../components/Nav";
// import Footer from "../components/Footer"

class SearchBooks extends Component {
  //initial state
  state = {
    search: "Pride & Prejudice",
    books: [],
    error: "",
    message: "",
  };

  //function for search bar
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  //function for submit button on search form
  handleFormSubmit = (event) => {
    event.preventDefault();
    // once it clicks it connects to the google book api with the search value
    API.getGoogleSearchBooks(this.state.search)
      .then((res) => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          // store response in a array
          let results = res.data.items;
          //map through array
          results = results.map((result) => {
            //store each book in a new object
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
              buttonText: "Save Book"
            };
            return result;
          });
          // reset state
          this.setState({ books: results, error: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleSavedButton = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.books);
    console.log(event.target.id);
    let savedBooks = this.state.books.filter(
      (book) => book.id === event.target.id
    );
    savedBooks = savedBooks[0];
    console.log(savedBooks);
    API.saveBook(savedBooks)
      .then(this.setState({ books: this.state.books.map(book=>{
        if (book.id === event.target.id){
          return {
            ...book, buttonText: "Saved!"
          }
        } else {
          return book;
        }
      })
     }))
      .catch((err) => console.log("ERROR", err));
  };
  render() {
    return (
      <>
      <Nav/>
        <Jumbotron/>
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
          <Search
            books={this.state.books}
            handleSavedButton={this.handleSavedButton}
          />
        </Container>
        {/* <Footer/> */}
      </>
    );
  }
}

export default SearchBooks;
