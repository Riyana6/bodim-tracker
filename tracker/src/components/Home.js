import React from 'react';

import NavigationBar from './NavigationBar';
import {Container,Row,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import UserHome from './userhome';
 

export default function Home() {
    const marginTop = {
        marginTop: "20px"
    }

    return (
        <Router >
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        
                        <Switch>
                            <Route path="/Home" exact component={Welcome}/>
                            <Route path="/Login" exact component={Login}/>
                            <Route path="/Signup" exact component={Signup}/>
                            <Route path="/UserHome" exact component={UserHome}/>
                        </Switch>
                        
                    </Col>
                    
                    
                </Row>
            </Container>
        </Router>
        
    );
}
