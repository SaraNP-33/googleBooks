import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    search: "",
    results: [],
  };
  // When this component mounts, search the GoogleBooks API for pictures of kittens
  componentDidMount() {
    this.searchGoogleBooks("Of Mice and Men");
  }
  searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  // When the form is submitted, search the GoogleBooks API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };
  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}
export default SearchContainer;
