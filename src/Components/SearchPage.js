import React, { Component } from 'react'
import Header from './Header';
import Search from './Search';

import Background from '../images/SN_P1.jpg'


const styles = {
    backgroundColor: 'aqua',
    background: `url(${Background})`,
    backgroundSize: '1100px 720px',
    backgroundRepeat: 'repeat',
    height: '100vh'
}

export default class SearchPage extends Component {

    render() {
        return (
            <div style={styles}>
                <Header />
                <Search />
            </div>
        )
    }
}
