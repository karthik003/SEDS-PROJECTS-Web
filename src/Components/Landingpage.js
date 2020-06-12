import React, { Component } from 'react'
import './Landingpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import down from '../Assets/down.gif';
import Stars from './Stars.js';
import stars from '../Assets/stars.webp';
import seds from '../Assets/seds-white.png';
import Bounce from 'react-reveal/Bounce';
import config from 'react-reveal/globals';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";

config({ ssrFadeout: true });
library.add(fab)

class Landingpage extends Component {
    render() {
        return (
            <div className="landing">
                <div className="stars1" width="50%"> 


             {/*   <div className="logo" style={{width:"100%"}}><img src={seds} style={{width:"150px",display:"block",marginLeft:"auto",marginRight:"auto"}}/> </div> */}
           <Router>
                <div className="centered" style={{justifyContent:"center",width:"100%"}}><p className="text"style={{textAlign:"center",color:"white",fontSize:"250%",fontWeight:"650"}}>SEDS VIT PROJECTS</p></div>
                <Bounce bottom>  
                <a className="instagram"><Link to="/instagram" ><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"style={{color:"white"}}/></Link></a>
                <a className="facebook"><Link to="/facebook" ><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"style={{color:"white"}}/></Link></a>
                <a className="linkedin"><Link to="/linkedin" ><FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x"style={{color:"white"}}/></Link></a>
                <a className="youtube"><Link to="/linkedin" ><FontAwesomeIcon icon={['fab', 'youtube']}  size="2x"style={{color:"white"}}/></Link></a>
                
                    </Bounce>
                    <Switch>
                    <Route path='/instagram' component={() => { window.location.href = 'https://instagram.com/sedsvit.projects?igshid=7ra3dgayhwll';return null;}}/>
                    <Route path='/facebook' component={() => { window.location.href = 'https://www.facebook.com/sedsvit.projects/';return null;}}/>
                    <Route path='/linkedin' component={() => { window.location.href = 'https://www.linkedin.com/company/sedsvit-projects';return null;}}/>
                    <Route path='/youtube' component={() => { window.location.href = 'https://www.youtube.com/channel/UCvD51YDPQT0Vs3r_Fcthurw';return null;}}/>
                    </Switch>
            </Router>
            </div>
        
           
            </div>

        )
    }
}

export default Landingpage