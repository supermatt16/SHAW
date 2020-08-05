import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import { ReactComponent as Logo } from "./ui/images/iconmonstr-medical-6.svg";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './ui/css/App.css';
// import './ui/SCSS/App.scss';
import Home from "./ui/Home";
import About from "./ui/About";
import Calendar from "./ui/Calendar";
import Feature from "./ui/Features";
import NotFound from "./ui/NotFound";


class App extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <MDBNavbar color="#00695c teal darken-3" dark expand="md">
                        <MDBNavbarBrand id="brand" href="/">
                            <h3 id="title-nav">SHAW</h3>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/about">About Me</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/calendar">Calendar</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/feature">Feature</MDBNavLink>
                                </MDBNavItem>
                                {/* <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/feature" component={Feature} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
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
