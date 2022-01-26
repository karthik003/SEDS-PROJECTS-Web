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
                                            <Route path='/instavicecap' component={() => { window.location.href = 'https://www.instagram.com/_abhishek.iyer_/';return null;}}/>
                                            <Route path='/instafinance' component={() => { window.location.href = 'https://www.instagram.com/harshpandey7/';return null;}}/>
                                            <Route path='/instamgmt' component={() => { window.location.href = 'https://www.instagram.com/akshad_kumbhare/';return null;}}/>
                                            {/* <Route path='/instamgmtco' component={() => { window.location.href = 'https://www.instagram.com/aehsas_mathur/';return null;}}/> */}
                                            <Route path='/instasoftware' component={() => { window.location.href = 'https://www.instagram.com/iamsushant.sri/';return null;}}/>
                                            {/* <Route path='/instasoftwareco' component={() => { window.location.href = 'https://www.instagram.com/shaolinkataria/';return null;}}/> */}
                                            <Route path='/instaele' component={() => { window.location.href = 'https://www.instagram.com/dishikapoddar/';return null;}}/>
                                            {/* <Route path='/instaeleco1' component={() => { window.location.href = 'https://www.instagram.com/dhruvshah2703/';return null;}}/>
                                            <Route path='/instaeleco2' component={() => { window.location.href = 'https://www.instagram.com/qwertylonewolf117/';return null;}}/> */}
                                            <Route path='/instamech' component={() => { window.location.href = '   https://www.instagram.com/_tu_.sh._ar_/';return null;}}/>
                                            {/* <Route path='/instamechco' component={() => { window.location.href = 'https://www.instagram.com/adityamurali4/';return null;}}/> */}
                                            <Route path='/instarad' component={() => { window.location.href = 'http://instagram.com/vishwanath01k';return null;}}/>
                                     

                                                {/*Board Linkedin Handles */}
                                            <Route path='/linkcap' component={() => { window.location.href = 'https://www.linkedin.com/in/adit-kirtani-5bb3811b3/';return null;}}/>
                                            <Route path='/linkvc' component={() => { window.location.href = 'https://www.linkedin.com/in/abhishek-iyer-6603531b4/';return null;}}/>
                                            <Route path='/linkf' component={() => { window.location.href = 'https://www.linkedin.com/in/harsh-pandey-03153818b';return null;}}/>
                                            <Route path='/linkmgh' component={() => { window.location.href = 'https://www.linkedin.com/in/akshad-kumbhare-134a1819a/';return null;}}/>
                                            {/* <Route path='/linkmgch' component={() => { window.location.href = 'https://www.linkedin.com/in/aehsas-mathur-192362196';return null;}}/> */}
                                            <Route path='/linkcsh' component={() => { window.location.href = 'https://linkedin.com/in/sushant4191';return null;}}/>
                                            <Route path='/linkeh' component={() => { window.location.href = 'https://www.linkedin.com/in/dishika-poddar-1188a2176/';return null;}}/>
                                           
                                            <Route path='/linkmh' component={() => { window.location.href = '    https://www.linkedin.com/in/tushar-kumar-singh-659852192/';return null;}}/>

                                            <Route path='/linkrdh' component={() => { window.location.href = 'https://www.linkedin.com/in/vishwanath-k-24185b1a9';return null;}}/>
                                        

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
