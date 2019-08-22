import React, { Component } from 'react'
import Link from '@material-ui/core/Link';

const styles = {
    backgroundColor: 'lightgrey',
    display: 'inline-block',
    width: '100%',
    padding: '10px',
    position: 'absolute',
    bottom: '0',
    left: '0'
}

const linkStyle = {
    margin: '10px 20px',
    fontWeight: 'bold',
    color: '#777'
}

class Footer extends Component {
    render() {
        return (
            <div style={styles}>
                <div style={{float: 'left', margin: '10px, 0'}}>
                    <Link href={'#'} color="inherit" style={linkStyle}>
                        About
                    </Link>
                    <Link href={'#'} color="inherit" style={linkStyle}>
                        How Search Works
                    </Link>
                </div>

                <div style={{float: 'right'}}>
                    <Link href={'#'} color="inherit" style={linkStyle}>
                        Privacy
                    </Link>
                    <Link href={'#'} color="inherit" style={linkStyle}>
                        Terms
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;
