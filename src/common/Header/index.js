import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Login from '../Login'
import SignUp from '../SignUp';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark"  expand="lg" collapseOnSelect variant="pills">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Gold Label</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/properties">
                                <Nav.Link>Properties</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/sign_in">
                                <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
