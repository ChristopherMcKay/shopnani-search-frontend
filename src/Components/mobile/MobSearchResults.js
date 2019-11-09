import React, { Component } from 'react'
import MobSearchHeader from './MobSearchHeader'
import MobProductList from './MobProductList';


export default class SearchResults extends Component {
    render() {
        return (
            <div>
                <MobSearchHeader />
                <MobProductList />
            </div>
        )
    }
}
