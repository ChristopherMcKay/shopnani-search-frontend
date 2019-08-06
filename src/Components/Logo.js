import React, { Component } from 'react'
import logoImg from '../images/ShopNaniLogo-Main.png';

class Logo extends Component {
    render() {

        const styles = {
            height: '120px'
        }
        return (
            <div>
                <img src={logoImg} style={styles}></img>
            </div>
        )
    }
}

export default Logo;
