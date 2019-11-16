import React, { Component } from 'react'

import pixar from '../images/pixar.jpg';
import banner from '../images/banner.png';

class Earnings extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{width: '947px', backgroundColor: 'white', padding: '30px'}}>
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px'}}>
                            <div style={{width: '200px', height: '70px', backgroundColor: '#333D94', textAlign: 'center', borderRadius: '5px'}}>
                                <p style={{color: 'white', marginTop: '10px', fontSize: '30px', fontWeight: 'bold'}}>₹0.00</p>
                            </div>
                            <p style={{fontWeight: 'bold', color: '#555', marginTop: '20px'}}>TOTAL CASHBACK EARNED</p>
                        </div>
                        
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                            <div style={{borderRight: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555'}}>Paid Cashback<p>₹0.00</p></div>
                            <div style={{borderRight: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555'}}>Pending Cashback<p>₹0.00</p></div>
                            <div style={{borderRight: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555'}}>Referal Cashback<p>₹0.00</p></div>
                            <div style={{paddingRight: '30px', paddingLeft: '30px', fontWeight: 'bold', color: '#555'}}>Available for Payment<p>₹0.00</p></div>
                        </div>
                    </div>
                    <div style={{width: '947px', backgroundColor: 'white', padding: '30px', marginTop: '15px'}}>
                            <img src={pixar} width={150} alt=""></img>
                            <div style={{textAlign: 'center', display: 'inline-block', width: '80%'}}>
                                <span style={{fontSize: '24px', padding: '0', margin: '0', display: 'block'}}>Awwww, don't cry!</span>
                                <span style={{fontSize: '36px'}}>Soon, you'll be saving a lot with ShopNani</span>
                                <img src={banner} width={680} alt=""></img>
                            </div>

                        </div>
            </React.Fragment>
        )
    }
}

export default Earnings;