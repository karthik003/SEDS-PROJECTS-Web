import React, { Component } from 'react'
import { Card,Row,Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";

class Boardmember extends Component {
    render() {
        return (
            <div>
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
                                                <span className="linkedin"style={{marginRight:"150px"}} ><Link to={this.props.linkedin} ><FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x"style={{color:"#1BB9CCA"}}alt="linkedin"/></Link></span>
                                                <span className="instagram"style={{marginRight:"13px"}}><Link to={this.props.instagram} ><FontAwesomeIcon icon={['fab', 'instagram']}  size="2x"style={{color:"#FF7400"}}alt="instagram"/></Link></span>
                                                </Col>
                                            </Row>
                                            <Switch>
                                                {/*Board Instagram Handles */}
                                            <Route path='/instacap' component={() => { window.location.href = 'https://www.instagram.com/shas._.hwat/';return null;}}/>
                                            <Route path='/instavicecap' component={() => { window.location.href = 'https://www.instagram.com/asutosh.dalei/';return null;}}/>
                                            <Route path='/instafinance' component={() => { window.location.href = 'https://www.instagram.com/akalpit_23/';return null;}}/>
                                            <Route path='/instamgmt' component={() => { window.location.href = 'https://www.instagram.com/shivikabisaria/';return null;}}/>
                                            <Route path='/instamgmtco' component={() => { window.location.href = 'https://www.instagram.com/aehsas_mathur/';return null;}}/>
                                            <Route path='/instasoftware' component={() => { window.location.href = 'https://www.instagram.com/roopesh_01/';return null;}}/>
                                            <Route path='/instasoftwareco' component={() => { window.location.href = 'https://www.instagram.com/shaolinkataria/';return null;}}/>
                                            <Route path='/instaele' component={() => { window.location.href = 'https://www.instagram.com/_shwe.0300/';return null;}}/>
                                            <Route path='/instaeleco1' component={() => { window.location.href = 'https://www.instagram.com/dhruvshah2703/';return null;}}/>
                                            <Route path='/instaeleco2' component={() => { window.location.href = 'https://www.instagram.com/qwertylonewolf117/';return null;}}/>
                                            <Route path='/instamech' component={() => { window.location.href = 'https://www.instagram.com/pratushsidar_/';return null;}}/>
                                            <Route path='/instamechco' component={() => { window.location.href = 'https://www.instagram.com/adityamurali4/';return null;}}/>
                                            <Route path='/instarad' component={() => { window.location.href = 'https://www.instagram.com/darsholeram/';return null;}}/>
                                            <Route path='/instaradco1' component={() => { window.location.href = 'https://www.instagram.com/v.j._karthik/';return null;}}/>
                                            <Route path='/instaradco2' component={() => { window.location.href = 'https://www.instagram.com/adityaray826/';return null;}}/>

                                                {/*Board Linkedin Handles */}
                                            <Route path='/linkcap' component={() => { window.location.href = '';return null;}}/>

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
