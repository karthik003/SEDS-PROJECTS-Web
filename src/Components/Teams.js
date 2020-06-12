import React, { Component } from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap';
import './Teams.css';
import ardra from '../Assets/ardra(notext).png';
import vyadh from '../Assets/vyadh.png';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

class Teams extends Component {
    render() {
        return (
            <>
                <div style={{textAlign:"center",backgroundColor:"black"}}>
               <br/><br/><br/><br/>

                    <h1 className="teams text" >TEAMS</h1>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <Col className=" " style={{minWidth:"300px",maxWidth:"500px",margin:"20px 0 20px 0",textAlign:"center"}}>    
                           <Zoom> 
                                <Card style={{ width: '250px',display:"inline-block" ,border:"2px solid white"}}>
                                    <Card.Img variant="top" src={ardra} />
                                    <Card.Body>
                                        <Card.Title>ARDRA</Card.Title>
                                        <Card.Text style={{textAlign:"justify"}}>
                                        Team Ardra, the drone team of SEDS VIT Projects,
                                         is a group of technically enthusiastic students 
                                         working together to design and create Unmanned Aerial Vehicles that 
                                         are built tough and work smart.
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                            </Zoom>
                        </Col>
                        <Col className=" " style={{minWidth:"300px",maxWidth:"500px",margin:"20px 0 20px 0",textAlign:"center"}}>    
                            <Zoom>
                                <Card style={{ width: '250px',display:"inline-block",border:"2px solid black" }}>
                                    <Card.Img variant="top" src={vyadh}  />
                                    <Card.Body>
                                        <Card.Title>VYADH</Card.Title>
                                        <Card.Text style={{textAlign:"justify"}}>
                                        Team Vyadh is synonymous to collaboration,
                                         cooperation and coordination.
                                         We put our hearts and souls in developing and 
                                         researching on rover technology advancing in the field of Martian terrain.
                                       </Card.Text>
                                    </Card.Body>
                                    </Card>   
                            </Zoom>
                        </Col>
                       
                    </Row>
                    <br/><br/><br/><br/>

               </div>
            </>
        )
    }
}

export default Teams
