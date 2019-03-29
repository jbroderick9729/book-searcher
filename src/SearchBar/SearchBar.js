import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="search">Search:
                    <input type="text" name="search" id="search" onChange={this.props.handleSearchTerm}></input>
                </label>
                <button type="submit">Search</button>
            </form>
        )
    }
}