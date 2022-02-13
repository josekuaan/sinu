import Footer from "../components/Footer"
import Header from "../components/Header"
import gala1 from "../images/collage/gala1.png";
import gala2 from "../images/collage/gala2.png";
import gala3 from "../images/collage/gala3.png";
import gala4 from "../images/collage/gala4.png";
import gala5 from "../images/collage/gala5.png";
import gala6 from "../images/collage/gala6.png";
import gala7 from "../images/collage/gala7.png";
import gala8 from "../images/collage/gala8.png";
import gala9 from "../images/collage/gala9.png";
import gala10 from "../images/collage/gala10.png";
import gala11 from "../images/collage/gala11.png";
import gala12 from "../images/collage/gala12.png";
import gala13 from "../images/collage/gala13.png";
import gala14 from "../images/collage/gala14.png";
import gala15 from "../images/collage/gala15.png";
import gala16 from "../images/collage/gala16.png";
import NavBar from "../components/NavBar";
import GalleryImg from '../images/Gallery.png'



const Gallery = ()  => {
  return(
      <header>
          
          <NavBar/>
          <div className='road-map-title gallery'>
                <img src={GalleryImg} alt='' />
            </div>
    <div className="galaContainer">
        <div className="galaBox">
            <img src={gala1} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala2} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala3} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala4} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala5} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala6} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala7} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala8} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala9} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala10} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala11} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala12} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala13} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala14} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala15} alt="gallery"></img>
        </div>
        <div className="galaBox">
            <img src={gala16} alt="gallery"></img>
        </div>
    </div>
          <Footer/>
      </header>
  )

}

export default Gallery