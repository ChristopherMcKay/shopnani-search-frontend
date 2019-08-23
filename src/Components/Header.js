import React, { Component } from 'react'
import PartialLogo from './PartialLogo';
import Menu from './Menu';


class Header extends Component {
    render() {
        return (
            <div style={{display: 'inline-block', width: '100%'}}>
                <div style={{float: 'left', margin: '2%'}}>
                    <PartialLogo />
                </div>
                <div style={{float: 'right', margin: '2%'}}>
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Header;
