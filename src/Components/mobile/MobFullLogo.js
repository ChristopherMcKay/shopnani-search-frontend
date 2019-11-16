import React, { Component } from 'react'
import logoImg from '../../images/ShopNaniLogo-Main.png';
import Link from '@material-ui/core/Link';



class FullLogo extends Component {
    render() {

        const styles = {
            height: '40px',
            marginTop: '17px',
            marginLeft: '2%',
        }
        return (
            <div style={{display: 'inline'}}>
                <Link href={'/'}><img src={logoImg} style={styles} alt=""></img></Link>
            </div>
        )
    }
}

export default FullLogo;