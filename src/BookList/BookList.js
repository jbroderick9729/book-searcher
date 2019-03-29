import React, { Component } from 'react';
import BookItem from '../BookItem/BookItem';

export default class BookList extends Component {
    render() {

        const bookItems = this.props.bookInfo.map(book => {
            return <BookItem title={book.title} author={book.author} description={book.description} price={book.price} src={book.src}/>
        })

        return (
            <ul>
                { bookItems }
            </ul>
        )
    }
}