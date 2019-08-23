import React, { Component } from 'react'
import FullLogo from './FullLogo';
import Search2 from './Search2';

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
}

class SearchHeader extends Component {
    render() {
        return (
            <div style={styles}>
                <FullLogo />
                <Search2 />
            </div>
        )
    }
}

export default SearchHeader;
