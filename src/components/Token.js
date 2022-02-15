import React from "react";

import { PieChart } from "react-minimal-pie-chart";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TokenomicsImg from "../images/Tokenomics.png";

export default function Token() {
  return (
    <div id="road-map" className="token">
      <NavBar />
      <div className="road-map-title token">
        <img src={TokenomicsImg} alt="" />
      </div>

      <div className="pie-chart">
        <PieChart
          data={[
            { title: "Allocated for Burning", value: 20, color: "#03D5F0" },
            { title: "Circulating Supply", value: 15, color: "#01EF9A" },
            { title: "Marketing Ecosystem", value: 10, color: "#D01CEF" },
            { title: "Funding Community", value: 5, color: "#F1F1F1" },
          ]}
        />
      </div>

      <div className="token-content ">
        <div className="token-card allocated">
          <h5 className="token-title">Allocated for Burning</h5>
          <ul className="bullet-point">
            <li>
              <p>58% or 3.8BB/ 3,4800,000.000 SINU</p>
            </li>
            <li>
              <p>3% burn at launch</p>
            </li>
            <li>
              <p className="last">55% to be burning batches randomly</p>
            </li>
          </ul>
        </div>
        <div className="token-card circulate">
          <h5 className="token-title">Circulating Supply</h5>
          <ul className="bullet-point">
            <li>
              <p>22.2% (1,320,000,000)</p>
            </li>
            <li>
              <p>12.2% distributed via free airdrop</p>
            </li>
            <li>
              <p className="last">10% for market creation on Dex</p>
            </li>
          </ul>
        </div>
        <div className="token-card market">
          <h5 className="token-title">Marketing Ecosystem </h5>
          <ul className="bullet-point">
            <li>
              <p>
                15% (used for exchange listing,growth,development and incentives
              </p>
            </li>
            <li>
              <p className="last">for active cummunity participation)</p>
            </li>
          </ul>
        </div>
        <div className="token-card fund">
          <ul className="bullet-point" style={{ paddingLeft: "0px" }}>
            <li className="token-title">
              Funding Community Members (Core Team) 4.8%
            </li>
          </ul>
        </div>
      </div>

      <div className="sinu_info" id="$SINU">
        <h3>Samo INU Official Market Infos </h3>
        <br></br>
        <p>
        Ticker: $SINU
            </p> 
        
        <p>
        Market ID: EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89
            </p> 
        <p>
        Dexlab Trading Link : <a href="https://trade.dexlab.space/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89" target="_blank" rel="noreferrer">https://trade.dexlab.space/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89</a>
        
            </p>
        <p>
        Solape DEX Trading Link : <a href="https://solapeswap.io/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89" target="_blank" rel="noreferrer">https://solapeswap.io/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89</a>
        
            </p> 
        <p>
        Raydium Swap Link : <a href="https://raydium.io/swap/?from=Ac7GiHwC7vZU2y97GRh9rqCqqnKAAgopYrTAtKccHxUk&to=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" target="_blank" rel="noreferrer">https://raydium.io/swap/?from=Ac7GiHwC7vZU2y97GRh9rqCqqnKAAgopYrTAtKccHxUk&to=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB</a>
        
      
            </p> 
        <p>
  
        Sonar.watch DEX Trading Link : <a href="https://dex.sonar.watch/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89" target="_blank" rel="noreferrer">https://dex.sonar.watch/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89</a>
        
            </p>
            <p>
  
        Bitrue DEX Trading Link : <a href="https://www.bitrue.com/trade/sinu_usdt" target="_blank" rel="noreferrer">https://www.bitrue.com/trade/sinu_usdt</a>
        
            </p>
        <p>
        Ninja DEX Trading Link : <a href="https://dex.ninjaprotocol.io/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89" target="_blank" rel="noreferrer">https://dex.ninjaprotocol.io/#/market/EXF3mbBWcFsS6bD87GDSGgCjoH8Rhxb9AbcEcJgkJw89</a>
        
            </p> <br></br>
        <p>
  
        --> Note: $SINU/USDT is the only supported pair at the moment.
          </p> <br></br>
       
      
      
      </div>

      <Footer />
    </div>
  );
}
