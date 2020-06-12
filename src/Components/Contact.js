import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
import contact from '../Assets/astro.webp';
import './Contact.css';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    render() {
        return (
            <div className=""style={{backgroundColor:"black"}}>
                  
                    <div className="astro">
                        {/*<img src={contact} style={{width:"30%"}}/>*/}
                    </div>
               
                <div className="form">
                <Form style={{marginRight:"15%",marginLeft:"15%"}}>
                        <div className="text" style={{color:"white",fontSize:"600%",fontWeight:"700",textAlign:"left"}}>
                            <img className="astro" src={contact} style={{width:"30%"}}/>
                           Drop us a line
                        </div><br />
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="integer" placeholder="Phone Number" />
                                <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" placeholder="Message" />
                                
                            </Form.Group>
                            <div >
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </div>
                                
                            </Form>
                </div>
                
                
            </div>
        )
    }
}

export default Contact
