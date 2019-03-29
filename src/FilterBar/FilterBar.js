import React, { Component } from 'react';

export default class FilterBar extends Component {
    render() {
        return (
            <form>
                <label htmlFor="print-type">Print type
                    <select value={this.props.printType} id="print-type" onChange={this.props.handlePrintTypeChange}>
                        <option value="all">All</option>
                        <option value="magazines">Magazines</option>
                        <option value="books">Books</option>
                        {/* <option value="newspapers">Newspapers</option>             */}
                    </select>
                </label>
                <label htmlFor="book-type">Book type
                    <select value={this.props.bookType} id="book-type" onChange={this.props.handleBookTypeChange}>
                        <option value="no-filter">No Filter</option>
                        <option value="ebook">Ebook</option>
                        <option value="free-ebook">Free Ebook</option>
                        <option value="preview-available">Preview Available</option>    
                    </select>
                </label>
            </form>
        )
    }
}