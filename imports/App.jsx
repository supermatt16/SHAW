import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';	

import './App.css';
import Home from "./ui/Home";
import About from "./ui/About";
import Calendar from "./ui/Calendar";
    
class App extends Component{
    render(){
        return(
            <div className = "App">
                <BrowserRouter>
                    <div className="nav-bar">
                        <Navbar bg="dark" variant="dark">
                            <Navbar Brand href="/">SHAW</Navbar>
                            <Nav className="mr-auto">
                                <Nav.link href="/about">About</Nav.link>
                                <Nav.link href="/calendar">Calendar</Nav.link>
                             </Nav>
                        </Navbar>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/calendar" component={Calendar} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
