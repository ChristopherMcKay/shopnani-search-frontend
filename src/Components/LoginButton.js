import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const styles = {
    color: 'white',
    backgroundColor: '#00A991',
    fontSize: '12px',
    height: '35px',
    display: 'inline'

}

class LoginButton extends Component {

render() {

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button variant="contained" style={styles}>
            Sign In
          </Button>
          
        </React.Fragment>
      )}
    </PopupState>
  );
      }
}

export default LoginButton;