import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form";

class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: [],
  };

  loadNextSearch = () => {
    API.Random()
      .then((res) => {
        console.log(res);
      })

      .catch((err) => console.log(err));
  };

  render() {
    return <Form></Form>;
  }
}

export default Search;
