import React, { Component } from 'react';

export default class BookItem extends Component {
    render() {
        return (
            <li>
                <img src="http://placekitten.com/200/300" />
                <h2>Book Title</h2>
                <p>Author</p>
                <p>Price: $1M</p>
                <p>Description: Boring as shit</p>
            </li>
        )
    }
}