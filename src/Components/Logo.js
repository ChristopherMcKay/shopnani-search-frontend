import React, { Component } from 'react'
import logoImg from '../images/ShopNaniLogo-Main.png';
import nani from '../images/Nani.png';


class Logo extends Component {
    render() {

        const styles = {
            height: '80px'
        }
        return (
            <div>
                <img src={nani} style={styles}></img>
            </div>
        )
    }
}

export default Logo;
