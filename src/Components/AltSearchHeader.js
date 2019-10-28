import React, { Component } from 'react'
import FullLogo from './FullLogo';
import Search2 from './Search2';
import LoginButton from './LoginButton';

import { connect } from 'react-redux';


const styles = {
    borderBottom: '2px solid #999',
    paddingBottom: '25px',
    backgroundColor: 'white'

}

const divStyles = {
    float: 'right',
    marginTop: '25px',
    marginRight: '30px',
}

class AltSearchHeader extends Component {
    render() {
    console.log(this.props)
        const { user } = this.props
        return (
            <div style={styles}>
                <FullLogo />
                <Search2 />
                
                <div style={divStyles}>
                    {user.isAuth ? <p style={{display: 'inline'}}>Welcome, {user.user.name}! <img src={user.user.avatar} width={30} style={{borderRadius: '15px'}}></img></p> : <LoginButton {...this.props} />}
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

  export default connect(mapStateToProps, null)(AltSearchHeader);