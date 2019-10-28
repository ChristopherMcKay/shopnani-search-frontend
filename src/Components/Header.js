import React, { Component } from 'react'
import PartialLogo from './PartialLogo';
import Menu from './Menu';
import LoginButtonHome from './LoginButtonHome';

class Header extends Component {
    render() {
        return (
            <div style={{display: 'inline-block', width: '100%'}}>
                <div style={{float: 'left', margin: '1.8%'}}>
                    <PartialLogo />
                </div>
                <div style={{float: 'right', margin: '2.5% 1.4%'}}>
                    {/* <Menu /> */}
                    <LoginButtonHome {...this.props} />
                </div>
            </div>
        )
    }
}

export default Header;
