import React from "react"
import sinugold from "../images/sinugold.png";
import sinuLord from "../images/sinu-lord.png";
import sinuVerse from "../images/sinu-verse.png";
import fighter1 from "../images/Fighter 1.png";
import fighter2 from "../images/Fighter 2.png";
import gameMode from "../images/game-mode.png";
import NavBar from './NavBar';


import Header from "./Header";

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
            <div className="section-two-img">
              <img src={sinuLord} alt="" style={{ width: "100%" }} />
            </div>
            <div className="section-two-container">
              <h1>Welcome To </h1>
              <img src={sinuVerse} alt="" />
              <p>
                SINUVerse is a metaverse project inspired by sine principles to
                bring forth a new world from the old one. (Sine is a
                mathematical function that brought together; geometry, the
                science of space and form, & algebra, the science of numbers).
                The first settlers in the SINUVerse will be SINU armies who must
                fight for their right to own a clan and survival of their clan.
                Each clan represents all the unique clan in our NFTs with
                varying attributes and features. The goal of each clan is to
                bring forth a new world.
              </p>
            </div>
          </div>
        </section>
      </header>
      <section className="section-three-content" id="game-modes">
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
      </section>
    </>
  );
}
