import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <>
                 <div class="jumbotron" style={{color:"white",marginBottom:"0px",marginTop:"8%",width:"100%",backgroundColor:"black"}}>

                            <div class="row justify-content-center ">

                                <div class="col-md-8 col-12 mt-5">
                                    <p style={{lineHeight:"1.7rem",textAlign:"justify"}}>Cubing Union of Brainy Enthusiasts is the first Cubing club ever created in VIT.
                                    Started in the year 2018, this club got its recognition in a very less timespan because of its creative ideology and motto.
                                    C.U.B.E VIT believes in bringing up the very underrated talents of the country especially Rubiks cube solving.
                                    We intend to present a platform to all the talented cubers around us.We are a non-profit professional club to have ideas exchanged between cubers and to ameliorate the skills of cubers 
                                    to help them achieve height in this field by making them compete with the other world-class cubers.</p>
                                </div>

                            </div>

                            <div class="row pb-3">

                                <div class="col-md-12">

                                    <div style={{width:"100%",textAlign:"center",display:"inline-block",color:"white"}}>

                                            <a class=" mr-4" >
                                            <FontAwesomeIcon icon={['fab', 'facebook']}  size="2x" />
                                            </a>
                                            <a class=" mr-4"h>
                                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"  />
                                            </a>
                                            <a class=" mr-4" >
                                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                                            </a>
                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  />
                                            </a>
                                            <a class=" mr-4">
                                            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"  />
                                            </a>

                                    </div>

                                </div>

                            </div>


                            <div class="footer-copyright text-center py-3" style={{width:"100%"}} >Made with ❤️ by
                            <a href=""> SEDS VIT PROJECTS</a>
                            </div>

                            </div>
            </>
        )
    }
}

export default Footer
