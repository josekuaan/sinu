import React from 'react';
import logo from '../images/logo.png'
import discordlogo from '../images/discordlogo.png'
import telegram from '../images/telegram.webp'
import twitter from '../images/Twitter-icon.png'





export default function Footer() {
  return <footer >

             <div>
                 <a href="/"><img src={logo} className="logo-black footerlogo" alt="logo"  width={150}/></a>
             </div>
             <div className='navbar-menu'>
                <ul className=" ">
                    <li><a href="https://twitter.com/sol_samoinu"><img src={twitter} alt='twitter logo' width={150}/></a></li>
                    <li><a href="http://discord.gg/samoinu"> <img src={discordlogo} alt='discord logo' width={150}/></a></li>
                    <li><a href="#teams"><img src={telegram} alt='telegram logo' width={150}/> </a></li>
                    
                </ul>
            </div>
        </footer>;
}
