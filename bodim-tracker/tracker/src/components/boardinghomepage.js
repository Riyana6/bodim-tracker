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
                            <Navbar bg="dark" variant="light" >
                                <Form inline>
                                <FormControl type="text" placeholder="Select your university" className="mr-sm-2" />
                                <Button variant="outline-primary">Search</Button>
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
