import React, { Component } from 'react'
import PartialLogo from './PartialLogo';
import LoginButtonHome from './LoginButtonHome';

import { connect } from 'react-redux';


class Header extends Component {
    render() {

        const { user } = this.props
        
        return (
            <div style={{display: 'inline-block', width: '100%'}}>
                <div style={{float: 'left', margin: '1.8%'}}>
                    <PartialLogo />
                </div>
                <div style={{float: 'right', margin: '2.5% 1.4%'}}>
                    {/* <Menu /> */}
                    {user.isAuth ? <p style={{display: 'inline'}}>Welcome, {user.user.name}! <img src={user.user.avatar} width={30} style={{borderRadius: '15px'}} alt=""></img></p> : <LoginButtonHome {...this.props} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
      suggestions: state.suggestions,
      user: state.user
    }
  }

  export default connect(mapStateToProps, null)(Header);
