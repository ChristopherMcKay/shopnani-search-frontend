import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import FullLogo from './FullLogo';

import searchImg from '../images/howsearchworks-img1.png';
import searchGIF from '../images/howsearchworks-img2.gif';


export default class HowSearchWorks extends Component {
    render() {
        return (
            <Container style={{textAlign: 'center', fontFamily: 'Open Sans'}}>
                <div style={{marginRight: '25px'}}>
                    <FullLogo />
                </div>

                <br />

                <p style={{fontWeight: 'bold'}}>ShopNani searches all the top stores so that you don’t have to.</p>

                <p style={{color: '#888'}}>When you shop here, you shop everywhere</p>

                <div style={{width: '600px', margin: '0 auto'}}>
                    <p>Every time you search, there are thousands, sometimes millions, of products with a similar name. How ShopNani figures out which results to show starts long before you even type, and is guided by a commitment to you to provide the best products available at best prices.</p>
                </div>
                

                <p><img src={searchImg} width={500}></img></p>

                <p style={{fontWeight: 'bold'}}>Organizing the products</p>

                <div style={{width: '600px', margin: '0 auto'}}>
                    <p>We organize thousands of products in an array within a few milliseconds, every time you perform a search.</p>
                </div>
                
                <div style={{width: '600px', margin: '0 auto'}}>
                    <p>We’re continuing to go beyond organizing the products available to better understand the people, products and things you care about. To do this, we not only organize products but other types of information too, like which phone’s your favorite phone, which laptop you’re interested in.</p>
                </div>
                

                <p><img src={searchGIF} width={400}></img></p>

                <p style={{fontWeight: 'bold'}}>Our mission</p>

                <div style={{width: '600px', margin: '0 auto'}}>
                    <p>From the beginning, 2016, our mission has been to deliver the best prices with minimum efforts and help our users take intelligence decisions while buying anything online. Today, 329,100,000 people in India shop online. We consider it a privilege to be able to help a small percentage of that help. As technology continues to evolve, our commitment will always be the same: helping everyone find the product they need.</p>
                </div>
                

                <br />
                <Link href={'/'} style={{fontSize: '24px', fontWeight: 'bold', color: '#444'}}>
                    Back to Search
                </Link>
                

            </Container>
        )
    }
}
