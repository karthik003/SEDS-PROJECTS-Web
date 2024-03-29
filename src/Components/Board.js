import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import ardra from '../Assets/ardra(notext).png';
import './Board.css';
import Boardmember from './Boardmember';
import cap from '../Assets/c.png';
import vc from '../Assets/vc.png';
import f from '../Assets/f.png';
import eh from '../Assets/eh.png';
// import ech1 from '../Assets/ech1.png';
// import ech2 from '../Assets/ech2.png';
import csh from '../Assets/csh.png';
// import csch from '../Assets/csch.png';
import mh from '../Assets/mh.png';
// import mch from '../Assets/mch.png';
import mgh from '../Assets/mgh.png';
// import mgch from '../Assets/mgch.png';
import rdh from '../Assets/rdh.png';
// import rdch1 from '../Assets/rdch1.jpg';
// import rdch2 from '../Assets/rdch2.png';

class Board extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#070A1A"}}>            <br /><br /> <br /><br /> 
                 <h1 className="text board" >THE BOARD</h1>
                <br /><br /><br />
                <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <Boardmember image={cap} instagram="/instacap" linkedin="/linkcap" name="Adit Kirtani" position="CAPTAIN"/>
                        <Boardmember image={vc} instagram='/instavicecap'linkedin="/linkvc" name="Abhishek Iyer" position="VICE CAPTAIN"/>
                        <Boardmember image={f} instagram='/instafinance' linkedin="/linkf" name="Harsh Pandey" position="FINANCE & MANAGEMENT HEAD"/>
                        <Boardmember image={mgh} instagram='/instamgmt' linkedin="/linkmgh" name="Akshad Kumbhare" position="DESIGN & DOCUMENTATION HEAD"/>
                        {/* <Boardmember image={mgch} instagram='/instamgmtco' linkedin="/linkmgch" name="Aehsas Mathur" position="MANAGEMENT CO-HEAD"/> */}
                    </Row>
                    <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    <Boardmember image={csh} instagram='/instasoftware' linkedin="/linkcsh"name="Sushant Srivastav" position="SOFTWARE HEAD"/>
                    {/* <Boardmember image={csch} instagram='/instasoftwareco' linkedin="/linkcsch"name="Shaolin Kataria" position="SOFTWARE CO-HEAD"/> */}
                    <Boardmember image={eh} instagram='/instaele' linkedin="/linkeh"name="Dishika Poddar" position="ELECTRICAL HEAD"/>
                    {/* <Boardmember image={ech1} instagram='/instaeleco1' linkedin="/linkech1"name="Dhruv Shah" position="ELECTRICAL CO-HEAD"/> */}
          
                    <Boardmember image={mh} instagram='/instamech' linkedin="/linkmh"name="Tushar Singh" position="MECHANICAL HEAD"/>
                    <Boardmember image={rdh} instagram='/instarad'linkedin="/linkrdh" name="K Vishwanath" position="R&D HEAD"/>
                    </Row>
                    {/* <Row style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                    {/* <Boardmember image={rdh} instagram='/instarad'linkedin="/linkrdh" name="Darshan Ram" position="R&D HEAD"/> */}
                    {/* <Boardmember image={rdch1} instagram='/instaradco1'linkedin="/linkrdch1" name="V.J.Karthik" position="R&D CO-HEAD"/> */}
                    
            </div>
        )
    }
}

export default Board
