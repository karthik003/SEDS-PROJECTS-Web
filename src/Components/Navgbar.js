import React, { Component } from 'react'
import './Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import seds from '../Assets/seds-white.png';
import { Link } from "react-scroll";
import Landingpage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Teams from './Teams';
import Gallery from './Gallery';
import Board from './Board';
import Footer from './Footer';

class Navgbar extends Component {
    constructor(props) {
        super(props)
        this.listener = null;
        this.state = {
            navBackground: " "

        }
    }

      componentDidMount() {
        this.listener=document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 100 ? " " : "#12162C";
    
          this.setState({ navBackground: backgroundcolor });
        });
      } 
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }   
    render() {
        return (
            <div>  
            <Navbar collapseOnSelect expand="lg" fixed="top"   style={{backgroundColor: `${this.state.navBackground}`}} className="navbarcol shadow-lg  navbar-light"> 
                <Navbar.Brand href="#home" style={{height:"100%"}}>
                <Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> <img  src={seds} style={{width:"100px"}} alt="seds logo"/> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse className="col-md-pull-3  navbar-light" id="responsive-navbar-nav"style={{justifyContent:"center",position:"relative",right:"3%"}}>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active1" to="landing" spy={true} smooth={true}duration={500}> HOME</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active2" to="about" spy={true} smooth={true}duration={500} > ABOUT</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active3" to="teams" spy={true} smooth={true}duration={500} > TEAMS</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active4" to="conquests" spy={true} smooth={true}duration={500}> GALLERY</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active5" to="board" spy={true} smooth={true}duration={500} offset={-5} > BOARD</Link></Nav.Link>

                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"25px",fontWeight:"700",marginLeft:"10px"}}>
                <a href="www.google.com"> Join the Team</a></Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
               
                <div id="landing" style={{backgroundColor:"#070A1A"}}><Landingpage /></div>
                <div id="about" style={{backgroundColor:"#070A1A"}}><About /></div>
                <div id="teams" style={{backgroundColor:"#070A1A"}}><br /><Teams /></div>
                <div id="conquests" style={{backgroundColor:"#070A1A"}}><br /><Gallery /></div>
                <div id="board" style={{backgroundColor:"#070A1A"}}><br /><br /><Board /></div>
                {/* <div id="join" style={{backgroundColor:"#070A1A"}}><br /><Join the Team /></div> */}
                <div id="contact" style={{backgroundColor:"#070A1A"}}><br /><br /><br /><br /><Contact /></div>
                <Footer />
            </div>
        )
    }
}

export default Navgbar