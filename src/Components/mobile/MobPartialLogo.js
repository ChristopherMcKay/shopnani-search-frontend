import React, { Component } from 'react'
import nani from '../../images/Nani.png';
import Link from '@material-ui/core/Link';



class PartialLogo extends Component {
    render() {

        const styles = {
            height: '65px'
        }
        return (
            <div>
                <Link href={'#'}><img src={nani} style={styles} alt=""></img></Link>
            </div>
        )
    }
}

export default PartialLogo;
