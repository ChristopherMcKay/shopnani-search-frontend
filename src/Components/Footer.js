import React, { Component } from 'react'
import Link from '@material-ui/core/Link';

const styles = {
    backgroundColor: 'lightgrey',
    display: 'inline-block',
    width: '100%',
    padding: '0',
    position: 'absolute',
    bottom: '0',
    fontFamily: 'Open Sans',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#777',
}


class Footer extends Component {
    render() {
        return (
            <div style={styles}>
                <div style={{float: 'left', margin: '10px 2.1%'}}>
                    <Link href={'/about'} color="inherit" style={{marginRight: '25px'}}>
                        About
                    </Link>
                    <Link href={'https://blog.shopnani.com/'} target="_blank" color="inherit" style={{marginRight: '25px'}}>
                        Blog
                    </Link>
                    <Link href={'/search-description'} color="inherit">
                        How Search Works
                    </Link>
                </div>

                <div style={{float: 'right', margin: '10px 2.1%'}}>

                    <Link href={'/terms-and-conditions'} color="inherit">
                        Terms
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;
