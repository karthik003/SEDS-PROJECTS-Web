import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,Link } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <>
                 <div class="jumbotron" style={{color:"white",marginBottom:"0px",width:"100%",backgroundColor:"black"}}>

                            <div class="row justify-content-center ">

                                <div class="col-md-8 col-12 mt-5">
                                    <p style={{lineHeight:"1.7rem",textAlign:"justify"}}>Student's for the Exploration and Development of Space (SEDS) is an international student organisation.
                                     The headquarters of SEDS-VIT, is SEDS-India. It comprises of various divisions,
                                      to ensure growth and development in various fields of space sciences with an amazing expertise. This is SEDS VIT PROJECTS.</p>
                                </div>

                            </div>

                            <div class="row pb-3">

                                <div class="col-md-12">

                                    <div style={{width:"100%",textAlign:"center",display:"inline-block",color:"white"}}>
                                        <Router>
                                          <span className="mr-4"><Link to="/instagram" ><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/facebook" ><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/linkedin" ><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/youtube" ><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                        </Router>

                                    </div>

                                </div>

                            </div>


                            <div class="footer-copyright text-center py-3" style={{width:"100%",marginBottom:"0px"}} >Made with love by  SEDS VIT PROJECTS
                            </div>

                            </div>
            </>
        )
    }
}

export default Footer
