import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const menuStyle = {
    display: 'inline',
    marginTop: '10px'
}

class Menuz extends Component {

    state = {
        anchorEl: null
    }

    setAnchorEl = (thing) => {
        this.setState({
            anchorEl: thing
        })
    }


    handleClick = (event) => {
        this.setAnchorEl(event.currentTarget);
      }

      handleClose = () => {
        this.setAnchorEl(null);
      }


    render() {

    const open = Boolean(this.state.anchorEl);

        return (
            <React.Fragment>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={this.handleClick} style={menuStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 18 18"><path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" /></svg>
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={this.handleClose}>Home</MenuItem>
                    <MenuItem onClick={this.handleClose}>Search</MenuItem>
                    <MenuItem onClick={this.handleClose}>Coupons</MenuItem>
                </Menu> 
            </React.Fragment>
        )
    }
}

export default Menuz
