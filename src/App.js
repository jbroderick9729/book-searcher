import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";
import BooksList from "./BookList/BookList";
import "./App.css";

// apikey = AIzaSyBQcuZvJiG3-pBqiOmP0mIxsZydLoiFGzE

class App extends Component {
  state = {
    searchTerm: "",
    printType: "all",
    bookType: "no-filter",
    searchUrl: ""
  };

  handleSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  handlePrintTypeChange(printType) {
    this.setState({
      printType
    });
  }

  handleBookTypeChange(bookType) {
    this.setState({
      bookType
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    console.log(searchTerm);
    const printType = this.state.printType;
    const bookType = this.state.bookType;
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBQcuZvJiG3-pBqiOmP0mIxsZydLoiFGzE&q=${searchTerm}&printType=${printType}&bookType=${bookType}`;

    this.setState({
      searchUrl: searchUrl
    })

    console.log(typeof this.state.searchTerm)
  }

  // componentDidMount() {
  //   const url = this.state.searchUrl;
  //   console.log('url: ', url)
  //   console.log('did mount, url in state is: ', this.state.searchUrl)
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(responseJ => console.log(responseJ))
    
  // }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBar
          handleSearchTerm={e => this.handleSearchTerm(e.target.value)}
          handleSubmit={this.handleSubmit}
        />
        <FilterBar
          handlePrintTypeChange={e =>
            this.handlePrintTypeChange(e.target.value)
          }
          handleBookTypeChange={e => this.handleBookTypeChange(e.target.value)}
          printType={this.state.printType}
          bookType={this.state.bookType}
        />
        <BooksList />
      </div>
    );
  }
}

export default App;
