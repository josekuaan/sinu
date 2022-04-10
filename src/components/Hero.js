import React from "react";
import sinugold from "../images/sinugold.png";
import sinuLord from "../images/sinu-lord.png";
import sinuVerse from "../images/sinu-verse.png";
import fighter1 from "../images/Fighter 1.png";
import fighter2 from "../images/Fighter 2.png";
import gameMode from "../images/game-mode.png";
import NavBar from "./NavBar";
import BouncyDiv from "./StyledDiv";
import Snowfall from "react-snowfall";
import Header from "./Header";
import RoadMapImage from "../images/Roadmap.png";


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
              <a href="/tokenomics#$SINU" className=" btn btn-join-metaverse">
                Buy $SINU Now
              </a>
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
                <div className="road-map-title">
                  {/* <img src={RoadMapImage} alt="" /> */}
                </div>
                <hr></hr>
                <div className="roadmap-section roadmap-styled">
                  <h2>Before Launch</h2>
                  <div>
                    <p>- Whitelist Event</p>
                    <p>- Game Mechanics Whitepaper Release</p>
                    <p>- Game Trailer of First Game on Sinuverse Unveiled</p>
                  </div>
                </div>
                <hr></hr>
                <div className="roadmap-section">
                  <div>
                    <p>
                      The 5,555 PupSINU 3D NFT genesis collection found their
                      new home with a new owner on the Solana blockchain.
                    </p>
                    
                  </div>
                  <h2>Launch Day</h2>
                  

                </div>
                <hr></hr>
                <div className="roadmap-section roadmap-styled">
                  <h2>After Launch</h2>
                  <div>
                    <p>- Listing on Secondary Market</p>
                    <p>
                      - More liquidity added to $SINU/USDT Pool on Raydium with
                      funds raised from NFT Sale
                    </p>
                    <p>- $SINU Major Token Burn</p>
                    <p>- Stake PupSINU 3D NFTs to earn $SINU</p>
                    <p>- Community Governance DAO Opens</p>
                    <p>- Purchase Merch with $SINU </p>
                  </div>
                </div>
                <hr></hr>
                <div className="roadmap-section">
                  <div>
                    <p>- $SINU Listed on CEX</p>
                    <p>
                      - Sinuverse goes live - First game on Sinuverse is
                      launched
                    </p>
                  </div>
                  <h2>Q3 2022</h2>

                </div>
              </div>
              
            </div>

            <div className="section-three-img">
              <img src={fighter1} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      {/* <section
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

            <div className="section-three-container">
              <center>
                <img src={gameMode} alt="" width={300} />
              </center>
            

               <p>
                PvP(Player vs Player) Mode The most advanced mode of our
                Play-2-Earn game is to allow players compete together in this
                player vs player mode and the goal is to increase community
                interaction through gaming.
                <br />
                <br /> PvC(Player Vs Computer) This can have massive effect on
                the clans leaderboard as playing against the computer might
                prove to be a more challenging opponent compared to the PvP
                mode. For fairness, we encourage that players engage in the PvP
                mode.
                <a
                  href="#"
                  className=" btn btn-read-paper"
                  style={{
                    marginTop: "20px",
                    display: "block",
                    width: "250px",
                  }}
                >
                  Whitepaper Soon{" "}
                </a>
              </p> 
            </div>

            <div className="section-three-img">
              <img src={fighter1} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
