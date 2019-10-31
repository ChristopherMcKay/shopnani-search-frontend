import React, { Component } from 'react'
import MobPartialLogo from './MobPartialLogo';
import MobLoginButtonHome from './MobLoginButtonHome';

class Header extends Component {
    render() {
        return (
            <div style={{display: 'inline-block', width: '100%'}}>
                <div style={{float: 'left', margin: '1.8%'}}>
                    <MobPartialLogo />
                </div>
                <div style={{float: 'right', margin: '2.5% 1.4%'}}>
                    {/* <Menu /> */}
                    <MobLoginButtonHome {...this.props} />
                </div>
            </div>
        )
    }
}

export default Header;
