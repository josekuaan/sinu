import React from 'react';

import sinuAlpha from '../images/sinu-alpha.png';
import sinuRed from '../images/sinu-red.png';
import sinuAstronut from '../images/sinu-astronut.png';
import sinuRider from '../images/sinu-rider.png';
import sinuGhost from '../images/sinu-ghost.png';
import sinuWolve from '../images/sinu-wolve.png';
import meetTeam from '../images/meet-the-team.png'
import SINUVERSE1 from '../images/sinuverse_1.mp4'

export default function Teams() {
  return <div className='sinu' >
      <center id='teams'><img src={meetTeam} alt='' width={300}/></center>
        <section className='sinu-team' >
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuAlpha} alt='sinu-alpha'/>
               <div className='team-detail'>
                   <div className='team-detail-hero'>
                   <h2>DeFiBeast</h2>
                    <p> keen about change, adapt, learn and build it while keeping things simple. An introvert without remorse</p>
                
                   </div>
                       <span><i>(Lazy Dev)</i></span>
               </div>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuRider} alt='sinu-rider'/>
               <div className='team-detail'>
               <div className='team-detail-hero'>

                    <h2>Kuaan</h2>
                    <p>Blockchain enthusiasts, in love with web3, always trying new things, cool me!</p>
                    </div>
                    <span><i>(Dart Dev Guy)</i></span>
               </div>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuGhost} alt='sinu-red' />
               <div className='team-detail'>
               <div className='team-detail-hero'>

                    <h2>RadicalMortal</h2>
                    <p> Finds expression in designs and illustrations</p>
                    </div>
                    <span><i>(Design Nerd)</i></span>
               </div>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuAstronut} alt='sinu-astronut' />

               <div className='team-detail'>
               <div className='team-detail-hero'>

                    <h2>Klipit</h2>
                    <div> Receptive and rigid in character. Create a metabridge and serve as the point of contact between the team and the community. </div>
                    </div>
                    <span><i>(MetaStrategist)</i></span>
               </div>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuRed} alt='sinu-red' />
               <div className='team-detail'>
               <div className='team-detail-hero'>

                    <h2>Lya</h2>
                    <p> Keeper of peace and orderliness. Making sure the non-living does not overthrow the living in the SinuVerse!</p>
                  </div>
                    <span><i>(MOD/BOT HUNTER)</i></span>
               </div>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuWolve} alt='sinu-wolve'  />
               <div className='team-detail'>
               <div className='team-detail-hero'>

                    <h2>De Maestro</h2>
                    <div>Desire to see, feel and grow the  implementation of design to  thrive in all aspects</div>
                   </div>
                    <span><i>(De Maestro)</i></span>
               </div>
           </div>
        </section>
        <div className=' section section-sinuverse'>
                        
            {/* <div className='section-three-sinuverse-text'>
            
                <p > 
                    PvP(Player vs Player ) Mode The most advanced mode of our Play-2-Earn game is to allow players compete together in this player vs player mode and the goal is to increase community interaction through gaming.<br /><br /> PvC(Player Vs Computer) This can have massive effect on the clans leaderboard as playing against the computer might prove to be a more challenging opponent compared to the PvP mode. For fairness, we encourage that players engage in the PvP mode.
                </p>
                
            </div> */}
            
            <div className='section-three-vedio'>
            {/* <iframe src={SINUVERSE1} className="ifr"  title='sinu fight' autoPlay>
            </iframe> */}
            {/* <video  autoPlay muted>
                <source src={SINUVERSE1} width={500} type="video/mp4" />
                Your browser does not s upport the video tag.
            </video> */}
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/UEVAjF8_3vg?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/pl/">youtubeembedcode pl</a></small></div><div><small><a href="https://mgacasinoutansvensklicens.se/">https://mgacasinoutansvensklicens.se</a></small></div></iframe>   
            </div>
        </div>
  </div>;
}
