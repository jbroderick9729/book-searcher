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
                    <select value={this.props.filter} id="book-type" onChange={this.props.handleBookTypeChange}>
                        <option value="ebooks">No Filter</option>
                        <option value="paid-ebooks">Paid Ebooks</option>
                        <option value="free-ebooks">Free Ebooks</option>
                        <option value="partial">Preview Available</option>    
                    </select>
                </label>
            </form>
        )
    }
}


