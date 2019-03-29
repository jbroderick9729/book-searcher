import React, { Component } from 'react';
import BookItem from '../BookItem/BookItem';

export default class Booklist extends Component {
    render() {
        return (
            <ul>
                <BookItem />
                <BookItem />
            </ul>
        )
    }
}