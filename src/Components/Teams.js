import React, { Component } from 'react'
import { Card } from 'antd';
import './Teams.css';
import ardra from '../Assets/ardra.png';
import vyadh from '../Assets/vyadh.png';

const { Meta } = Card;

class Teams extends Component {
    render() {
        return (
            <>
                <div style={{textAlign:"center",backgroundColor:"black"}}>
               <br/><br/><br/><br/>

                    <h1 className="teams" >TEAMS</h1><br />
                    <div class="row" style={{margin:"0 5% 0 5%",justifyContent:"center"}} >
                        <div class="col-6 ardra" style={{minWidth:"300px",maxWidth:"500px",textAlign:"center",display:"inline-block",width:"100%",height:"100%",margin:"20px 0 20px 0"}}>    
                            <Card hoverable cover={<img alt="example"src={ardra} />}>
                                <Meta title="" description="ARDRA"  style={{fontSize:"30px",fontWeight:"900"}}/>
                            </Card>
                        </div>
                        <div class="col-6 vyadh" style={{minWidth:"300px",maxWidth:"500px",textAlign:"center",display:"inline-block",width:"100%",margin:"20px 0 20px 0"}}>    
                            <Card hoverable cover={<img alt="example" class="vyadh"src={vyadh} height="100%" />}>
                                <Meta title="" description="VYADH"style={{fontSize:"30px",fontWeight:"900"}} />
                            </Card>
                        </div>
                       
                    </div>
                    <br/><br/><br/><br/>

               </div>
            </>
        )
    }
}

export default Teams
