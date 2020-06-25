import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import ardra from '../Assets/ardra(notext).png';
import './Board.css';
import Boardmember from './Boardmember';
import cap from '../Assets/c.jpg';
import vc from '../Assets/vc.jpg';
import f from '../Assets/f.jpg';
import eh from '../Assets/eh.jpg';
import ech1 from '../Assets/ech1.jpg';
import ech2 from '../Assets/ech2.JPG';
import csh from '../Assets/csh.jpg';
import csch from '../Assets/csch.jpg';
import mh from '../Assets/mh.JPG';
import mch from '../Assets/mch.png';
import mgh from '../Assets/mgh.jpg';
import mgch from '../Assets/mgch.png';
import rdh from '../Assets/rdh.jpg';
import rdch1 from '../Assets/rdch1.jpg';
import rdch2 from '../Assets/rdch2.jpg';

class Board extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#070A1A"}}>            <br /><br /> <br /><br /> 
                 <h1 className="text board" >THE BOARD</h1>
                <br /><br /><br />
                <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <Boardmember image={cap} instagram="/instacap" name="Shashvat Shukla" position="CAPTAIN"/>
                        <Boardmember image={vc} instagram='/instavicecap' name="Asutosh Dalei" position="VICE CAPTAIN"/>
                        <Boardmember image={f} instagram='/instafinance' name="Akalpit Dawkhar" position="FINANCE HEAD"/>
                        <Boardmember image={mgh} instagram='/instamgmt' name="Shivika Bisaria" position="MANAGEMENT HEAD"/>
                        <Boardmember image={mgch} instagram='/instamgmtco' name="Aehsas Mathur" position="MANAGEMENT CO-HEAD"/>
                    </Row>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    <Boardmember image={csh} instagram='/instasoftware' name="Roopesh A" position="SOFTWARE HEAD"/>
                    <Boardmember image={csch} instagram='/instasoftwareco' name="Shaolin Kataria" position="SOFTWARE CO-HEAD"/>
                    <Boardmember image={eh} instagram='/instaele' name="Shwetanshu Singh" position="ELECTRICAL HEAD"/>
                    <Boardmember image={ech1} instagram='/instaeleco1' name="Dhruv Shah" position="ELECTRICAL CO-HEAD"/>
                    <Boardmember image={ech2} instagram='/instaeleco2' name="Karthik Rajesh" position="ELECTRICAL CO-HEAD"/>
                    </Row>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    <Boardmember image={mh} instagram='/instamech' name="Pratush Sidar" position="MECHANICAL HEAD"/>
                    <Boardmember image={mch} instagram='/instamechco' name="Aditya Murali" position="MECHANICAL CO-HEAD"/>
                    <Boardmember image={rdh} instagram='/instarad' name="Darshan Ram" position="R&D HEAD"/>
                    <Boardmember image={rdch1} instagram='/instaradco1' name="V.J.Karthik" position="R&D CO-HEAD"/>
                    <Boardmember image={rdch2} instagram='/instaradco2' name="Aditya Ray" position="R&D CO-HEAD"/>
                    </Row>
                    
            </div>
        )
    }
}

export default Board
