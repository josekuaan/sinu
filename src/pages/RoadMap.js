import React from 'react'
import Steps from '../images/steps.png'
import RoadMapImage from '../images/Roadmap.png'
import Initial from '../images/initial.png'
import Growth from '../images/growth.png'
import Expansion from '../images/expansion.png'
import Appointment from '../images/appointment.png'
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
                <div className='group-content'>
                    <img src={Initial} alt='' />
                </div>
                <div className='group-content'>
                   <img src={Growth} alt='' />
                </div>
                <div className='group-content'>
                  <img src={Expansion} alt='' />
                </div>
                <div className='group-content'>
                    <img src={Appointment} alt='' />
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
