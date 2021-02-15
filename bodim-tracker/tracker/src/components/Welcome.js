import React from 'react';

import {Jumbotron,Image,Col, Form,FormControl,Button,Navbar} from 'react-bootstrap';
import Footer from './Footer';
import logo from './house.jpeg';

export default function Home() {
    const marginTop = {
        marginTop: "20px"
    }
    
    return (
        <div>
            <Col lg={12} style={marginTop}>
                <Jumbotron fluid align="center" >
                <h1>Welcome to Uni Boarding Tracker</h1>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Find your boarding or tell about your boarding places to us
                        </p>
                        <div className="auth-wrapper">
                            <Navbar bg="dark" variant="light"  >
                                <Form inline align="right">
                                    <select id = "dropdown">
                                        <option value="N/A">Select your univeristy</option>
                                        <option value="1">University of Colombo</option>
                                        <option value="2">University of Moratuwa</option>
                                        <option value="3">University of Sri Jayewardenepura</option>
                                        <option value="4">University of Kelaniya</option>
                                        <option value="5">University of Peradeniya</option>
                                        <option value="6">University of Ruhuna</option>
                                        <option value="7">University of Jaffna</option>
                                        <option value="8">South Eastern University of Sri Lanka</option>
                                        <option value="9">Rajarata University of Sri Lanka</option>
                                        <option value="10">Wayamba University of Sri Lanka</option>
                                        <option value="11">Uva Wellassa University</option>
                                        <option value="12">Sabaragamuwa University of Sri Lanka</option>
                                        <option value="13">Eastern University of Sri Lanka</option>
                                        <option value="14">University of the Visual and Performing Arts</option>
                                        <option value="15">Buddhist and Pali University</option>
                                        <option value="16">Bhiksu University of Sri Lanka</option>
                                    </select>
                                    <Button variant="outline-primary">  Search</Button>
                                </Form>
                            </Navbar>
                        </div>
                        
                        <Footer className="blockquote-footer">
                            <Footer/>
                        </Footer>
                    </blockquote>
                </Jumbotron>
                <div align="center">
                    <Image src={logo} fluid />
                </div>
                
            </Col>
            
        </div>
        
        
    );
}
