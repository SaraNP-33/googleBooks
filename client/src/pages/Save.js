import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import Saved from "../components/Saved";
import Nav from "../components/Nav";

class SaveBook extends Component {
  state = {
    savedBooks: [],
  };

  //get all books saved to the database
  componentDidMount() {
    API.getBooks()
      .then((res) => this.setState({ savedBooks: res.data }))
      .catch((err) => console.log(err));
  }

  //delete book by id
  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
      <Nav/>
        <Jumbotron/>

        <Container>
          <Saved
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </>
    );
  }
}

export default SaveBook;
