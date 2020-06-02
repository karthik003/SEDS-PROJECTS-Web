import React, { Component } from 'react'
import './Landingpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import down from '../Assets/down.gif';
import Stars from './Stars.js';
import stars from '../Assets/stars.webp';
import seds from '../Assets/seds-white.png';
library.add(fab)

class Landingpage extends Component {
    render() {
        return (
            <div className="landing">
                <img src={stars} width="50%" height="100%"/>
                <img src={stars} width="50%" height="100%"/>

             {/*   <div className="logo" style={{width:"100%"}}><img src={seds} style={{width:"150px",display:"block",marginLeft:"auto",marginRight:"auto"}}/> </div> */}
                <div className="centered" style={{justifyContent:"center",width:"100%"}}><p style={{textAlign:"center",color:"white",fontSize:"250%",fontWeight:"700"}}>SEDS VIT PROJECTS</p></div>
            
                    <a className="instagram"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"style={{color:"white"}}/></a>
                    <a className="facebook"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"style={{color:"white"}}/></a>
                    <a className="linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"style={{color:"white"}}/></a>
                    <a className="youtube"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"style={{color:"white"}}/></a>
                
            </div>

        )
    }
}

export default Landingpage
