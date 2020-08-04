import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from "./ui/images/iconmonstr-medical-6.svg";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon, MDBHamburgerToggler } from 'mdbreact';

// import './ui/CSS/App.css';
import './ui/SCSS/App.scss';
import Home from "./ui/Home";
import About from "./ui/About";
import Calendar from "./ui/Calendar";
import Feature from "./ui/Features";
import NotFound from "./ui/NotFound";


class App extends Component {
    state = {
        collapse1: false,
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: ( prevState.collapseID !== collapseID ? collapseID:'' ) }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState ({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render(){
        return(
            <div className="app">
                <BrowserRouter>
                    <MDBContainer id="nav-bar">
                        <div id="bar-nav">
                            <MDBNavbar color="#00796b teal darken-2" style={{marginTop: '20px'}} dark>
                                <MDBNavbarBrand id="brand" href="/">
                                    SHAW
                                </MDBNavbarBrand>
                                <MDBHamburgerToggler color="#e64a19 deep-orange darken-2" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                                <MDBCollapse isOpen={this.state.collapse1} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="/">Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                            <MDBNavLink to="/about">About</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                            <MDBNavLink to="/calendar">Calendar</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem active>
                                            <MDBNavLink to="/feature">Feature</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBNavbar>
                        </div>
                    </MDBContainer>
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


//Below is the previous navbar before switching to MDB react

/*
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
*/
export default App;
