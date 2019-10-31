import React, { Component } from 'react'
import logoImg from '../../images/ShopNaniLogo-Main.png';
import nani from '../../images/Nani.png';
import Link from '@material-ui/core/Link';



class PartialLogo extends Component {
    render() {

        const styles = {
            height: '65px'
        }
        return (
            <div>
                <Link href={'#'}><img src={nani} style={styles}></img></Link>
            </div>
        )
    }
}

export default PartialLogo;
