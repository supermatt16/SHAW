import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import './ui/CSS/App.css';
import Home from "./ui/Home";
import About from "./ui/About";
import Calendar from "./ui/Calendar";
import NotFound from "./ui/NotFound";

class App extends Component {
    render(){
        return(
            <div className="app">
                <BrowserRouter>
                    <div className="nav-bar-app">
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/">SHAW</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/calendar">Calendar</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/calendar" component={Calendar} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
