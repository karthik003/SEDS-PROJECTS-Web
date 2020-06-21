import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import drone from '../Assets/drone.png';
import drone2 from '../Assets/drone2.jpg';
import drone3 from '../Assets/drone3.png';
import rover from '../Assets/rover.png';
import rover2 from '../Assets/rover2.png';
import './Gallery.css'
class Gallery extends Component {
    render() {
        return (
            <div class="jumbotron container" style={{width:"75%",backgroundColor:"#070A1A",marginBottom:"0px"}}><br />
             <h1 className="text gallery" >GALLERY</h1>
              <br /><br /><br />
             <Carousel >
                <div style={{width:"100%",textAlign:"center",display:"inline-box"}}>
                    <img src={drone} style={{width:"100%",height:"100%"}} alt="drone1"/>
                </div>
                <div style={{width:"100%",textAlign:"center",display:"inline-box",justifyContent:"center"}}>
                    <img src={rover} style={{width:"100%"}} alt="rover1"/>
                </div>
                <div style={{width:"100%",textAlign:"center",display:"inline-box",justifyContent:"center"}}>
                    <img src={drone2} style={{width:"100%"}} alt="drone2"/>
                </div>
                <div style={{width:"100%",textAlign:"center",display:"inline-box",justifyContent:"center"}}>
                    <img src={rover2} style={{width:"100%"}} alt="rover2"/>
                </div>
                <div style={{width:"100%",textAlign:"center",display:"inline-box",justifyContent:"center"}}>
                    <img src={drone3} style={{width:"100%"}} alt="drone3"/>
                </div>
                
            </Carousel>
            </div>
        )
    }
}

export default Gallery
