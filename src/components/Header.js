import logo from "../images/logo.png";
import navbar from '../images/navbar.png'


const Header = () => {
  return (
    <nav id="first-view">
      <div className=" navbar">
        <div>
          <a href="index.html">
            <img src={logo} className="logo-black" alt="logo" width={150} />
          </a>
        </div>
        <div className="navbar-menu">
          <img src={navbar} />
          <ul className="main-nav js--main-nav ">
            <li>
              <a href="#first-view">Home</a>
            </li>
            <li>
              <a href="#sinu-verse"> SINUVerse</a>
            </li>
            <li>
              <a href="#game-modes"> GameModes</a>
            </li>
            <li>
              <a href="#teams">Team </a>
            </li>
            {/* <li><a href="#sinu">Whitepaper </a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header