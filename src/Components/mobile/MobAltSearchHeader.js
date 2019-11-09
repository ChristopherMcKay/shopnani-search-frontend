import React, { Component } from 'react'
import MobFullLogo from './MobFullLogo';
import MobSearch3 from './MobSearch3';
import MobLoginButton from './MobLoginButton';

import { connect } from 'react-redux';


const styles = {
    borderBottom: '2px solid #999',
    paddingBottom: '25px',
    backgroundColor: 'white',
    position: 'relative',
    textAlign: 'center'

}

const divStyles = {
    position: 'absolute',
    right: '22px',
    top: '18px'
}

const logoStyles = {
    position: 'absolute',
    left: '15px',
    top: '1px'
}

class MobAltSearchHeader extends Component {
    render() {
        const { user } = this.props
        return (
            <div style={styles}>
                <div style={logoStyles}>
                    <MobFullLogo />
                </div>

                <MobSearch3 />
                
                <div style={divStyles}>
                    {user.isAuth ? <p style={{display: 'inline', fontSize: '12px'}}>Welcome, {user.user.name}! <img src={user.user.avatar} width={30} style={{borderRadius: '15px', marginLeft: '5px'}}></img></p> : <MobLoginButton {...this.props} />}
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

  export default connect(mapStateToProps, null)(MobAltSearchHeader);