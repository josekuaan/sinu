import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import navbar from '../images/navbar.png'

export default function NavBar() {
  return (
    <nav id="first-view">
    <div className=" navbar">
       
        <div>
           <a href="index.html"><img src={logo} className="logo-black" alt="logo"  width={150}/></a>
        </div>
        <div className='navbar-menu'>
        <img src={navbar} alt='nav'/>
        <ul className="main-nav js--main-nav ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery"> Gallrry</Link></li>
            <li><Link to="/roadmap"> RoadMap</Link></li>
            
            
        </ul>
    </div>
       
  </div>

</nav>
  )
}
