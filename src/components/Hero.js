import React from "react";
import {Link} from 'react-router-dom'
import sinugold from "../images/sinugold.png";
import sinuLord from "../images/sinu-lord.png";
import sinuVerse from "../images/sinu-verse.png";
import fighter1 from "../images/Fighter 1.png";
import fighter2 from "../images/Fighter 2.png";
import roadmap from "../images/Roadmap.png";
import NavBar from "./NavBar";
import BouncyDiv from "./StyledDiv";
import Snowfall from "react-snowfall";
import RoadMapImage from "../images/Roadmaphero.png";



export default function Hero() {
  return (
    <>
      <header>
        <NavBar />

        <div className="hero-text-box">
          <center>
            <div className="sinu-title">
              <img src={sinuVerse} alt="" style={{ width: "100%" }} />
              <br />
              <span className="sinu-brief">
                SINUVerse is a metaverse project inspired by sine principles to
                bring forth a new world from the old one.{" "}
              </span>
            </div>
            <div>
              <Link to="/tokenomics" className=" btn btn-join-metaverse">
                Buy $SINU Now
              </Link>
            </div>

            <div className="sinu-image">
              <img src={sinugold} alt="sinu gold" />
            </div>
          </center>
        </div>
        <section>
          <div className=" section section-two" id="sinu-verse">
            <BouncyDiv className="section-two-img">
              <img src={sinuLord} alt="" style={{ width: "100%" }} />
            </BouncyDiv>
            <div className="section-two-container">
              <h1>Welcome To </h1>
              <img src={sinuVerse} alt="" />
              <p>
                The Sinuverse will be raided by a top collection of 5,555 SINU
                Armies who are on their journey to the new world of Solana
                Blockchain.
              </p>
            </div>
          </div>
        </section>
      </header>
      <section
        className="section-three-content"
        id="game-modes"
        style={{ position: "relative" }}
      >
        <Snowfall
          
          color="white"
         

          style={{
            position: "absolute",
            width: "100vw",
            
          }}
             snowflakeCount={200}
        />
        <div className="pvp">
        
          <div className=" section section-three">
         
            <div className="section-three-img">
              <img src={fighter2} alt="" style={{ width: "100%" }} />
            </div>

            <div className="">
              <center>
                <img src={RoadMapImage} alt="" width={300} />
              </center>
            
              <div className="container Row roadmap">
                
                <img src={roadmap} alt='road-map' style={{width: '100%'}}/>
              </div>
              
            </div>

            <div className="section-three-img">
              <img src={fighter1} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
