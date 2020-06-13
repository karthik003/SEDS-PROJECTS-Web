import React, { Component } from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap';
import './Teams.css';
import ardra from '../Assets/ardra(notext).png';
import vyadh from '../Assets/vyadh.png';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

config({ ssrFadeout: true });

class Teams extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ardraopen:false,
             vyadhopen:false
        }
    }
    onOpenArdra = () => {
        this.setState({ ardraopen: true });
      };
      onOpenVyadh = () => {
        this.setState({ vyadhopen: true });
      };
    
      onCloseArdra = () => {
        this.setState({ ardraopen: false });
      };
      onCloseVyadh = () => {
        this.setState({ vyadhopen: false });
      };
    
    render() {
        const { ardraopen,vyadhopen } = this.state;
        return (
            <>
                <div style={{textAlign:"center",backgroundColor:"black"}}>
               <br/><br/><br/><br/>

                    <h1 className="teams text" >TEAMS</h1>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <Col className=" " style={{minWidth:"300px",maxWidth:"500px",margin:"20px 0 20px 0",textAlign:"center"}}>    
                           <Zoom> 
                                <Card style={{ width: '250px',display:"inline-block" ,border:"2px solid white"}}>
                                    <Card.Img variant="top" src={ardra} alt="ardra logo" />
                                    <Card.Body>
                                        <Card.Title>ARDRA</Card.Title>
                                        <Card.Text style={{textAlign:"justify",fontFamily:"Ariel",color:"black"}}>
                                        Team Ardra, the drone team of SEDS VIT Projects,
                                         is a group of technically enthusiastic students 
                                         working together to design and create Unmanned Aerial Vehicles that 
                                         are built tough and work smart.
                                        </Card.Text>
                                        <Button variant="primary" onClick={this.onOpenArdra}>Click to know more</Button>
                                    </Card.Body>
                                    <Modal open={ardraopen} onClose={this.onCloseArdra} blockScroll={false} center>
                            
                                            <h2>ARDRA</h2>
                                            <p style={{fontFamily:"Ariel",color:"black"}}>
                                            Team Ardra, the drone team of SEDS VIT Projects, is a group of technically
                                            enthusiastic students working together to design and create UAVs that are
                                            built tough and work smart.Since its inception in 2014, Team Ardra has put
                                            in the most dedicated work to build unmanned aerial vehicles, that have
                                            proved their mettle not only pan VIT and nationally but also in several
                                            international competitions. We as a team follow a culture of ideation
                                            and innovation hence making our every project unique and sophisticated.
                                            We work together as a unified front with our moto of "Throttling Towards Excellence."
                                            </p>
                                    </Modal>
                                    </Card>
                            </Zoom>
                        </Col>
                        
                        <Col className=" " style={{minWidth:"300px",maxWidth:"500px",margin:"20px 0 20px 0",textAlign:"center"}}>    
                            <Zoom>
                                <Card style={{ width: '250px',display:"inline-block",border:"2px solid black" }}>
                                    <Card.Img variant="top" src={vyadh} alt="vyadh logo"/>
                                    <Card.Body>
                                        <Card.Title>VYADH</Card.Title>
                                        <Card.Text style={{textAlign:"justify",fontFamily:"Ariel",color:"black"}}>
                                        Team Vyadh is synonymous to collaboration,
                                         cooperation and coordination.
                                         We put our hearts and souls in developing and 
                                         researching on rover technology advancing in the field of Martian terrain.
                                       </Card.Text>
                                       <Button variant="primary" onClick={this.onOpenVyadh}>Click to know more</Button>
                                    </Card.Body>
                                    <Modal open={vyadhopen} onClose={this.onCloseVyadh} blockScroll={false} center>
                            
                                            <h2>VYADH</h2>
                                            <p style={{fontFamily:"Ariel",color:"black"}}>
                                            Team Vyadh is synonymous to collaboration, cooperation 
                                            and coordination.It is a proud fact that Team Vyadh is
                                            the first Rover team of SEDS India.We put our hearts
                                            and souls in developing and researching on technology
                                            advancing in the field of Martian terrain.In just a span
                                            of four years we have participated in various competitions
                                            like erc16 , erc18 and many more.Achievements like erc18 rank
                                            two in Asia and being in the top 36 teams in the university
                                            rover challenge among 98  other teams are a testimony to the
                                            fellowship and hardwork that we put in.Team Vyadh is focused
                                            at a target of finding a sustainable solution for the detection
                                            and exploration of life in space environment.
                                            </p>
                                    </Modal>
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
