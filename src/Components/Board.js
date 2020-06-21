import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import ardra from '../Assets/ardra(notext).png';
import './Board.css';
import Boardmember from './Boardmember';
class Board extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#070A1A"}}>            <br /><br /> <br /><br /> 
                 <h1 className="text board" >THE BOARD</h1>
                <br /><br /><br />
                <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <Boardmember image={ardra} instagram="/instacap" name="Shashvat Shukla" position="CAPTAIN"/>
                        <Boardmember image={ardra} instagram='/instavicecap' name="Asutosh Dalei" position="VICE CAPTAIN"/>
                        <Boardmember image={ardra} instagram='/instafinance' name="Akalpit Dawkhar" position="FINANCE HEAD"/>
                        <Boardmember image={ardra} instagram='/instamgmt' name="Shivika Bisaria" position="MANAGEMENT HEAD"/>
                        <Boardmember image={ardra} instagram='/instamgmtco' name="Aehsas Mathur" position="MANAGEMENT CO-HEAD"/>
                    </Row>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    <Boardmember image={ardra} instagram='/instasoftware' name="Roopesh A" position="SOFTWARE HEAD"/>
                    <Boardmember image={ardra} instagram='/instasoftwareco' name="Shaolin Kataria" position="SOFTWARE CO-HEAD"/>
                    <Boardmember image={ardra} instagram='/instaele' name="Shwetanshu Singh" position="ELECTRICAL HEAD"/>
                    <Boardmember image={ardra} instagram='/instaeleco1' name="Dhruv Shah" position="ELECTRICAL CO-HEAD"/>
                    <Boardmember image={ardra} instagram='/instaeleco2' name="Karthik Rajesh" position="ELECTRICAL CO-HEAD"/>
                    </Row>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    <Boardmember image={ardra} instagram='/instamech' name="Pratush Sidar" position="MECHANICAL HEAD"/>
                    <Boardmember image={ardra} instagram='/instamechco' name="Aditya Murali" position="MECHANICAL CO-HEAD"/>
                    <Boardmember image={ardra} instagram='/instarad' name="Darshan Ram" position="R&D HEAD"/>
                    <Boardmember image={ardra} instagram='/instaradco1' name="V.J.Karthik" position="R&D CO-HEAD"/>
                    <Boardmember image={ardra} instagram='/instaradco2' name="Aditya Ray" position="R&D CO-HEAD"/>
                    </Row>
                    
            </div>
        )
    }
}

export default Board
