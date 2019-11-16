import React, { Component } from 'react'

import pixar from '../../images/pixar.jpg';
import banner from '../../images/banner.png';

class Earnings extends Component {
    render() {
        return (
            <div style={{width: '350px'}}>
                <div style={{backgroundColor: 'white', padding: '15px'}}>
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <div style={{width: '200px', height: '70px', backgroundColor: '#333D94', textAlign: 'center', borderRadius: '5px'}}>
                                <p style={{color: 'white', marginTop: '10px', fontSize: '30px', fontWeight: 'bold'}}>₹0.00</p>
                            </div>
                            <p style={{fontWeight: 'bold', color: '#555', marginTop: '20px'}}>TOTAL CASHBACK EARNED</p>
                        </div>
                        
                        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                            <div style={{borderBottom: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555', marginBottom: '5px'}}>Paid Cashback<p>₹0.00</p></div>
                            <div style={{borderBottom: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555', marginBottom: '5px'}}>Pending Cashback<p>₹0.00</p></div>
                            <div style={{borderBottom: '1px solid #777', paddingRight: '70px', paddingLeft: '30px', fontWeight: 'bold', color: '#555', marginBottom: '5px'}}>Referal Cashback<p>₹0.00</p></div>
                            <div style={{paddingRight: '30px', paddingLeft: '30px', fontWeight: 'bold', color: '#555'}}>Available for Payment<p>₹0.00</p></div>
                        </div>
                    </div>
                    <div style={{backgroundColor: 'white', padding: '15px', marginTop: '15px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <img src={pixar} width={150} alt=""></img>
                            <div style={{textAlign: 'center', display: 'inline-block', width: '80%'}}>
                                <span style={{fontSize: '18px', padding: '0', margin: '0', display: 'block'}}>Awwww, don't cry!</span>
                                <span style={{fontSize: '24px'}}>Soon, you'll be saving a lot with ShopNani</span>
                                <img src={banner} width={240} alt=""></img>
                            </div>

                        </div>
            </div>
        )
    }
}

export default Earnings;