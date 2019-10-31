import React, { Component } from 'react'
import MobHeader from './MobHeader';
import MobSearch from './MobSearch';

import Background from '../../images/SN_P1.jpg'


const styles = {
    backgroundColor: 'aqua',
    background: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${Background})`,
    backgroundSize: '1100px 720px',
    backgroundRepeat: 'repeat',
    height: '100vh'
}

export default class SearchPage extends Component {

    render() {
        return (
            <div style={styles}>
                    <MobHeader />
                    <MobSearch />
            </div>
        )
    }
}
