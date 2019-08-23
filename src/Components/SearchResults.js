import React, { Component } from 'react'
import SearchHeader from './SearchHeader'
import ProductList from './ProductList';


export default class SearchResults extends Component {
    render() {
        return (
            <div>
                <SearchHeader />
                <ProductList />
            </div>
        )
    }
}
