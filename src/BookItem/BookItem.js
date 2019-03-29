import React, { Component } from 'react';
import './BookItem.css';


export default class BookItem extends Component {
    render() {
        return (
            <li className="book-item">
                <div>
                    <img src={this.props.src} />
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.author}</p>
                    <p>{this.props.price}</p>
                    <p>{this.props.description}</p>
                </div>
            </li>
        )
    }
}