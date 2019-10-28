import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import FullLogo from './FullLogo';

export default class About extends Component {
    render() {
        return (
            <Container style={{fontFamily: 'Open Sans'}}>
                

                <div style={{width: '100%', textAlign: 'center'}}>

                <div style={{marginRight: '25px'}}>
                    <FullLogo />
                </div>

                <h1 style={{color: '#444'}}>About us</h1>

                
                
                <p style={{fontWeight: 'bold'}}>
                Search, Shop and Save on millions of products from 2,000+ retailers

                </p>

                <p>
                Our mission is to deliver the best prices with minimum efforts and help our users take intelligence decisions.
                </p>

                </div>

                <div style={{width: '60%', margin: '0 auto'}}>
                    <p>
                    Founded by Yugansh Chokra in June 2016 as a price comparison website and over the years have transitioned into India’s largest product based search engine with over 30 million products across 20,000+ retailers. 
                    </p>
                    <p>
                    We monetize our website through affiliate commissions and advertisements. We get affiliate commissions from top online retailers like Amazon, Flipkart for sales generated through our leads. We run advertisement campaigns for our brand partners like Samsung, Google, Oppo, Vivo, Nokia, Huawei, Lenovo, HP, Dell, Voltas and many more
                    </p>
                    <p>
                        Click <Link href={'https://blog.shopnani.com/'}>here</Link> to check offerings from our editorial team.
                    </p> 
                </div>
              
                <br />
                <div style={{width: '100%', textAlign: 'center'}}>
                <Link href={'/'} style={{fontSize: '24px', fontWeight: 'bold', color: '#444'}}>
                    Back to Search
                </Link>
                </div>
                

            </Container>
        )
    }
}
