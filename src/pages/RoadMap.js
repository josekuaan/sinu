import React from 'react'
import Steps from '../images/steps.png'
import RoadMapImage from '../images/Roadmap.png'
import Initial from '../images/initial.png'
import Growth from '../images/growth.png'
import Expansion from '../images/expansion.png'
import Appointment from '../images/appointment.png'
import BigAmb from '../images/bigAmb.png'
import Init from '../images/init.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default function RoadMap() {
  return (
    <div id="road-map">
        <NavBar />
       <div className='container'>
            <div className='road-map-title'>
                <img src={RoadMapImage} alt='' />
            </div>

            <div className='road-map-img'>
            <img src={Steps} alt='' />
            </div>
            

            <div className='road-map-content'>
                <div className="card">
                    <div className='card-image'><img className="card-img-top" src={Init} alt="Card cap" /></div>
                    <div className="card-body">
                      <h5 className='card-title one'>INITIATION PHASE</h5>
                      <p className="card-text">●Social network creation and integration </p>
                      <p className="card-text">● Roles assignment for airdrop qualification criteria </p>
                      <p className="card-text">● Website Release after 5000 Discord members </p>
                      <p className="card-text">● GitHub Release with supporting documentation </p>
                      <p className="card-text">● 12.2% Airdrop distribution to qualified community members. </p>
                      <p className="card-text">● Project launch with the first market creation on a Dex. </p>
                      <p className="card-text">● 1,000 SINU holders</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className='card-image'><img className="card-img-top" src={Expansion} alt="Card cap" /></div>
                    <div className="card-body">
                      <h5 className='card-title two'>EXPANSION PHASE</h5>
                      <p className="card-text">● Tools and Products rollout </p>
                      <p className="card-text">● More Partnerships and Project outreach </p>
                      <p className="card-text">● Community expansion (Discord, Twitter) </p>
                      <p className="card-text">● 20,000 SINU Holders </p>
                      <p className="card-text">● More Cex Listings. </p>
                      <p className="card-text">● NFT art idea, concept, and development. </p>
                      <p className="card-text">● Continued large scale marketing efforts. </p>
                      <p className="card-text">● 50,000 SINU holders</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className='card-image'><img className="card-img-top" src={Growth} alt="Card cap" /></div>
                    <div className="card-body">
                      <h5 className='card-title three'>GROWTH PHASE</h5>
                      <p className="card-text">● Full-fledged Marketing Campaigns </p>
                      <p className="card-text">● First token burn </p>
                      <p className="card-text">● Coingecko and Coinmarketcap listing </p>
                      <p className="card-text">● Whitepaper Release </p>
                      <p className="card-text">● 5,000 SINU Holders  </p>
                      <p className="card-text">● Second token burn </p>
                      <p className="card-text">● Community Events, tasks, and contests </p>
                      <p className="card-text">● Partnerships and integration</p>
                      <p className="card-text">● 10,000 Holders</p>
                      <p className="card-text">● Cex Listing</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className='card-image'><img className="card-img-top" src={Appointment} alt="Card cap" /></div>
                    <div className="card-body">
                      <h5 className='card-title four'>APPOINTMENT PHASE</h5>
                      <p className="card-text">● DAO establishment and governance </p>
                      <p className="card-text">● Project restructure and team expansion </p>
                      <p className="card-text">● Creation of a Launch pool</p>
                      <p className="card-text">● Expansive presence establishment</p>
                      <p className="card-text">● Features are added as the need arises...  </p>
                    </div>
                </div>
                
            </div>
            {/* <Footer/> */}
        </div>
        <div >
            <img src={BigAmb} alt='' style={{width:'100%'}} />
            </div>
    </div>
  )
}
