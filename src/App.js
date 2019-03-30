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
    filter: "ebooks",
    bookInfo: []
  };

  handleSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  handlePrintTypeChange(printType) {
    this.setState({
      printType
    });
  }

  handleBookTypeChange(filter) {
    this.setState({
      filter
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    const printType = this.state.printType;
    const filter = this.state.filter;
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBQcuZvJiG3-pBqiOmP0mIxsZydLoiFGzE&q=${searchTerm}&printType=${printType}&filter=${filter}`;
    console.log('searchUrl', searchUrl);
    fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      const bookInfo = [];
      data.items.forEach(item => {
      console.log('whole item', item);
        const bookObj = {
        src: item.volumeInfo.imageLinks.smallThumbnail,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 'Not For Sale',
      }
      bookInfo.push(bookObj); 
    })
    this.setState({
      bookInfo
    })  
    console.log(this.state); 
  })
  
}

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
          filter={this.state.filter}
        />
        <BooksList bookInfo={this.state.bookInfo}/>
      </div>
    );
  }
}

export default App;
