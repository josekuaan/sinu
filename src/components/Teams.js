import React from 'react';

import sinuAlpha from '../images/sinu-alpha.png';
import sinuRed from '../images/sinu-red.png';
import sinuAstronut from '../images/sinu-astronut.png';
import sinuRider from '../images/sinu-rider.png';
import sinuGhost from '../images/sinu-ghost.png';
import sinuWolve from '../images/sinu-wolve.png';
import meetTeam from '../images/meet-the-team.png'
import fighter1 from '../images/Fighter 1.png'

export default function Teams() {
  return <div className='sinu'>
      <center><img src={meetTeam} alt='' width={300}/></center>
        <section className='sinu-team'>
           <div className='sinu-team-img'>
               <img src={sinuAlpha} alt='sinu-alpha'/>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuRider} alt='sinu-rider'/>
           </div>
           <div className='sinu-team-img' style={{textAlign: 'right'}}>
               <img src={sinuGhost} alt='sinu-red' />
           </div>
           <div className='sinu-team-img'>
               <img src={sinuAstronut} alt='sinu-astronut' />
           </div>
           <div className='sinu-team-img' style={{textAlign: 'center'}}>
               <img src={sinuRed} alt='sinu-red' />
           </div>
           <div className='sinu-team-img' style={{textAlign: 'right'}}>
               <img src={sinuWolve} alt='sinu-wolve'  />
           </div>
        </section>
        <div className=' section section-three'>
                        
            <div className='section-three-container'>
                
                <p > 
                    PvP(Player vs Player ) Mode The most advanced mode of our Play-2-Earn game is to allow players compete together in this player vs player mode and the goal is to increase community interaction through gaming.<br /><br /> PvC(Player Vs Computer) This can have massive effect on the clans leaderboard as playing against the computer might prove to be a more challenging opponent compared to the PvP mode. For fairness, we encourage that players engage in the PvP mode.
                </p>
                
            </div>
            
            <div className='section-three-img'>
                <img src={fighter1} alt='' style={{width:'100%'}} />
            </div>
        </div>
  </div>;
}
