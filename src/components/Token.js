import React from 'react'

import { PieChart } from 'react-minimal-pie-chart';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Token () {
        return (
            <div id="road-map">
                <NavBar />
                <center style={{margin: '50px 0',color:'#fff'}}><h4>Tokenomics</h4></center>
               <div className='pie-chart'>
                    <PieChart
                            data={[
                            { title: 'Allocated for Burning', value: 20, color: '#03D5F0' },
                            { title: 'Circulating Supply', value: 15, color: '#01EF9A' },
                            { title: 'Marketing Ecosystem', value: 10, color: '#D01CEF' },
                            { title: 'Funding Community', value: 5, color: '#F1F1F1' },
                            ]}
                        />
                </div>

                        <div className='token-content '>
                           <div className='allocated'>
                                <h5 className='token-title'>Allocated for Burning</h5>
                                <ul className='bullet-point'>
                                    <li>
                                        <p>58% or 3.8BB/ 3,4800,000.000 SINU</p>
                                        <p>3% burn at launch</p>
                                        <p className='last'>55% to be burning batches randomly</p>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            <div  className='circulate'>
                                <h5 className='token-title'>Circulating Supply</h5>
                                <ul className='bullet-point'>
                                    <li>
                                        <p>22.2% (1,320,000,000)</p>
                                        <p>12.2% distributed via free airdrop</p>
                                        <p  className='last'>10% for market creation on Dex</p>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            <div className='market'>
                                <h5 className='token-title'>Marketing Ecosystem </h5>
                                <ul className='bullet-point'>
                                    <li>
                                        <p>15% (used for exchange listing,growth,development and incentives</p>
                                        <p  className='last'>for active cummunity participation)</p>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className='fund'>
                                <ul className='bullet-point' style={{paddingLeft: "0px"}}>
                                    <li className='token-title'>
                                    Funding Community Members (Core Team) 4.8%
                                    </li >
                                    
                                </ul>
                                
                            </div>
                   </div>
               
                   {/* <Footer /> */}
            </div>
        )
}
