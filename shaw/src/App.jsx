import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from "./ui/images/iconmonstr-medical-6.svg";

// import './ui/CSS/App.css';
import './ui/SCSS/App.scss';
import Home from "./ui/Home";
import About from "./ui/About";
import Calendar from "./ui/Calendar";
import Feature from "./ui/Features";
import NotFound from "./ui/NotFound";

class App extends Component {
    render(){
        return(
            <div className="app">
                <BrowserRouter>
                    <div className="nav-bar-app">
                        <Navbar id="nav-bar-app" bg="dark" variant="dark">
                            <Navbar.Brand id="brand" href="/" >
                                <Logo alt="" width="25px" height="25px" className="logo" />
                                SHAW
                            </Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/calendar">Calendar</Nav.Link>
                                <Nav.Link href="/feature">Features</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/feature" component={Feature} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
