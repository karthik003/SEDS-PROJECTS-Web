import React, { Component } from 'react'
import { Card,Row,Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";

class Boardmember extends Component {
    render() {
        return (
            <div >
                 <Col style={{margin:"20px 0 20px 0",textAlign:"center"}}>    
                           <Zoom> 
                                <Card style={{ width: '200px',display:"inline-block" ,border:"2px solid white"}}>
                                    <Card.Img variant="top" src={this.props.image} alt="ardra logo" />
                                    <Card.Body style={{padding:"20px 10px 50px 10px"}}>
                                        <Card.Title>{this.props.name}</Card.Title>
                                        <Card.Title style={{color:"grey",fontSize:"15px"}}>{this.props.position}</Card.Title>
                                        <Card.Text style={{textAlign:"justify",fontFamily:"Ariel",color:"black",wordSpacing:"-2.5px"}}>
                                        <Router>
                                            <Row>
                                                <Col  style={{textAlign:"center"}}>
                                                <span className="linkedin"style={{marginRight:"50px"}} ><Link to={this.props.linkedin} ><FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x"style={{color:"#1BB9CCA"}}alt="linkedin"/></Link></span>
                                                <span className="instagram"style={{marginRight:"-90px"}}><Link to={this.props.instagram} ><FontAwesomeIcon icon={['fab', 'instagram']}  size="2x"style={{color:"#FF7400"}}alt="instagram"/></Link></span>
                                                </Col>
                                            </Row>
                                            <Switch>
                                                {/*Board Instagram Handles */}
                                            <Route path='/instacap' component={() => { window.location.href = 'https://www.instagram.com/adit.kirtani/';return null;}}/>
                                            <Route path='/instavicecap' component={() => { window.location.href = 'https://www.instagram.com/asutosh.dalei/';return null;}}/>
                                            <Route path='/instafinance' component={() => { window.location.href = 'https://www.instagram.com/akalpit_23/';return null;}}/>
                                            <Route path='/instamgmt' component={() => { window.location.href = 'https://www.instagram.com/shivikabisaria/';return null;}}/>
                                            <Route path='/instamgmtco' component={() => { window.location.href = 'https://www.instagram.com/aehsas_mathur/';return null;}}/>
                                            <Route path='/instasoftware' component={() => { window.location.href = 'https://www.instagram.com/iamsushant.sri/';return null;}}/>
                                            <Route path='/instasoftwareco' component={() => { window.location.href = 'https://www.instagram.com/shaolinkataria/';return null;}}/>
                                            <Route path='/instaele' component={() => { window.location.href = 'https://www.instagram.com/_shwe.0300/';return null;}}/>
                                            {/* <Route path='/instaeleco1' component={() => { window.location.href = 'https://www.instagram.com/dhruvshah2703/';return null;}}/>
                                            <Route path='/instaeleco2' component={() => { window.location.href = 'https://www.instagram.com/qwertylonewolf117/';return null;}}/> */}
                                            <Route path='/instamech' component={() => { window.location.href = 'https://www.instagram.com/pratushsidar_/';return null;}}/>
                                            <Route path='/instamechco' component={() => { window.location.href = 'https://www.instagram.com/adityamurali4/';return null;}}/>
                                            <Route path='/instarad' component={() => { window.location.href = 'https://www.instagram.com/darsholeram/';return null;}}/>
                                            {/* <Route path='/instaradco1' component={() => { window.location.href = 'https://www.instagram.com/v.j._karthik/';return null;}}/>
                                            <Route path='/instaradco2' component={() => { window.location.href = 'https://www.instagram.com/adityaray826/';return null;}}/> */}

                                                {/*Board Linkedin Handles */}
                                            <Route path='/linkcap' component={() => { window.location.href = 'https://www.linkedin.com/in/shashwat-shukla-b8aa44192';return null;}}/>
                                            <Route path='/linkvc' component={() => { window.location.href = 'https://linkedin.com/in/asutosh-dalei2212';return null;}}/>
                                            <Route path='/linkf' component={() => { window.location.href = 'https://www.linkedin.com/in/akalpit-dawkhar-942584179';return null;}}/>
                                            <Route path='/linkmgh' component={() => { window.location.href = 'https://in.linkedin.com/in/shivika-bisaria';return null;}}/>
                                            <Route path='/linkmgch' component={() => { window.location.href = 'https://www.linkedin.com/in/aehsas-mathur-192362196';return null;}}/>
                                            <Route path='/linkcsh' component={() => { window.location.href = 'https://linkedin.com/in/sushant4191';return null;}}/>
                                            {/* <Route path='/linkcsch' component={() => { window.location.href = 'https://www.linkedin.com/in/shaolink';return null;}}/> */}
                                            <Route path='/linkeh' component={() => { window.location.href = 'https://www.linkedin.com/in/shwetanshu-6422a4190';return null;}}/>
                                            <Route path='/linkech1' component={() => { window.location.href = 'https://www.linkedin.com/in/dhruv-shah-87a7a6179';return null;}}/>
                                            <Route path='/linkech2' component={() => { window.location.href = 'https://www.linkedin.com/in/karthik-rajesh-3940ab1a3/';return null;}}/>
                                            <Route path='/linkmh' component={() => { window.location.href = 'https://www.linkedin.com/in/pratush-sidar-152470191/';return null;}}/>
                                            <Route path='/linkmch' component={() => { window.location.href = 'https://www.linkedin.com/in/aditya-muralidharan-32b9a21a2';return null;}}/>
                                            <Route path='/linkrdh' component={() => { window.location.href = 'https://www.linkedin.com/in/darshan-ram-3b95b867';return null;}}/>
                                            {/* <Route path='/linkrdch1' component={() => { window.location.href = 'https://www.linkedin.com/in/karthik-v-j-737726169/';return null;}}/>
                                            <Route path='/linkrdch2' component={() => { window.location.href = 'https://www.linkedin.com/in/aditya-ray-bba61017b';return null;}}/> */}

                                            </Switch>
                                            </Router>
                                        </Card.Text>
                                    </Card.Body>
                                    
                                    </Card>     
                            </Zoom>
                        </Col>
            </div>
        )
    }
}

export default Boardmember
