import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
import contact from '../Assets/astro.webp';
import './Contact.css';
import axios from 'axios';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             phone:'',
             message:'',
             submit:false

        }
    }
    changeHandler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler =e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://formspree.io/xoqklaqp',this.state)
        .then(response =>{
             console.log(response)   
        })
        .catch(error =>{
            console.log(error)
        })
    }
    clickSubmit = ()=>{
        this.setState({
            submit:true
        },console.log("Thankyou for you response.")
        )
    }
    closeSubmit =()=>{
        this.setState({
            submit:false
        })
    }
    render() {
        const{name,email,phone,message,submit}=this.state
        return (
            <div style={{backgroundColor:"black"}}>
                  
                    <div className="astro">
                        {/*<img src={contact} style={{width:"30%"}}/>*/}
                    </div>
               
                <div className="form" style={{textAlign:"left"}}>
                <Form style={{marginRight:"15%",marginLeft:"15%"}} onSubmit={this.submitHandler}>
                        <div className="text" style={{color:"white",fontSize:"600%",fontWeight:"700",textAlign:"left"}}>
                            <img className="astro" src={contact} style={{width:"30%"}} alt="Astronaut"/>
                           Drop us a line
                        </div><br />
                            <Form.Group controlId="formName" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={this.changeHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="integer" placeholder="Phone Number" name="phone" value={phone} onChange={this.changeHandler}/>
                                <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" placeholder="Message" name="message" value={message} onChange={this.changeHandler}/>
                                
                            </Form.Group><br />
                            <div >
                                <Button variant="primary" type="submit" onClick={this.clickSubmit}>
                                    Submit
                                </Button>
                            </div>
                            <Modal classNames={{
                                animationIn: 'customEnterAnimation',
                                animationOut: 'customLeaveAnimation',
                                }} animationDuration={1000}  open={submit} onClose={this.closeSubmit} blockScroll={false} center style={{border:"1px solid red"}}>
                            <br />
                            <h2 className="text">Thankyou for your response</h2>
                            
                            </Modal>
                            </Form>
                </div>
                
                
            </div>
        )
    }
}

export default Contact
