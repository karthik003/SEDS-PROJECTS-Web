import React, { Component } from 'react'
import './Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import seds from '../Assets/seds-white.png';

class Navgbar extends Component {
    render() {
        return (
            <div>  
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#111111"}} fixed="top"> 
                <Navbar.Brand href="#home" style={{height:"100%"}}>
                    <img  src={seds} style={{width:"70px"}}/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"style={{justifyContent:"center"}}>
                            <Nav.Link className="mr-1  " href="#home" style={{fontFamily:"Roboto, sans-serif",color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}>HOME</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif",color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}>ABOUT</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}>TEAMS</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}>CONQUESTS</Nav.Link>
                            <Nav.Link className="mr-1 " href="#link" style={{fontFamily:"Roboto, sans-serif ",color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}>CONTACT</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navgbar
