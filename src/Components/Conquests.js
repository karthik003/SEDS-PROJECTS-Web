import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cansat from '../Assets/photo gallery/cansat/2016/1.jpeg';
class Conquests extends Component {
    render() {
        return (
            <div class="jumbotron container" style={{width:"75%",backgroundColor:"black"}}><br /><br /><br />
            <Carousel >
                <div style={{width:"100%",textAlign:"center",display:"inline-box"}}>
                    <img src={cansat} style={{width:"100%"}}/>
                    <p className="legend">2020</p>
                </div>
                <div style={{justifyContent:"center"}}>
                    <img src={cansat} style={{width:"100%"}} />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{justifyContent:"center"}}>
                    <img src={cansat} style={{width:"100%"}}/>
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
            </div>
        )
    }
}

export default Conquests
