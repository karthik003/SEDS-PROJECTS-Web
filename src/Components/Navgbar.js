import React, { Component } from 'react'
import './Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import seds from '../Assets/seds-white.png';
import { Link, animateScroll as scroll, Element } from "react-scroll";
import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Teams from './Teams';
import Conquests from './Conquests';
import Footer from './Footer';

class Navgbar extends Component {
    render() {
        return (
            <div>  
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#111111"}} fixed="top"> 
                <Navbar.Brand href="#home" style={{height:"100%"}}>
                <Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> <img  src={seds} style={{width:"70px"}}/> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"red"}} />
                <Navbar.Collapse className="col-md-pull-3" id="responsive-navbar-nav"style={{justifyContent:"center"}}>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="active1" to="landing" spy={true} smooth={true}duration={500}> HOME</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="active2" to="about" spy={true} smooth={true}duration={500} offset={30}> ABOUT</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="active3" to="teams" spy={true} smooth={true}duration={500} offset={30}> TEAMS</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="active4" to="conquests" spy={true} smooth={true}duration={500} offset={30}> CONQUESTS</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="active5" to="contact" spy={true} smooth={true}duration={500} > CONTACT</Link></Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
               
                <div id="landing"><Landingpage /></div>
                <div id="about"><br /><br /><br /><br /><About /></div>
                <div id="teams"><br /><Teams /></div>
                <div id="conquests"><br /><Conquests /></div>
                <div id="contact"><br /><br /><br /><br /><Contact /></div>
                <Footer />
            </div>
        )
    }
}

export default Navgbar
