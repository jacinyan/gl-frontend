import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import { UserContext } from '../../utils/context/userContext'


const Header = ({ state }) => {

    const history = useHistory()

    const { state: loggedInState, dispatch } = useContext(UserContext)
    console.log(loggedInState);
    const { username } = loggedInState

    const logoutHandler = () => {
        dispatch({ type: 'USER_LOGOUT' })
        history.push('/login')
    }


    return (
        <header>
            <Navbar bg="dark" expand="lg" collapseOnSelect variant="pills">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Gold Label</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {state ?
                                <>
                                    <LinkContainer to="/">
                                        <Nav.Link >Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/properties">
                                        <Nav.Link>Properties</Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown title={username}>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/profile">
                                                <Nav.Link>MyProfile</Nav.Link>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/bookings">
                                                <Nav.Link>MyBookings</Nav.Link>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link onClick={logoutHandler}><i className='fas fa-sign-out-alt'></i>Log out
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link><i className="fas fa-sign-in-alt"></i>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/sign_up">
                                        <Nav.Link ><i className='fas fa-user-plus'></i>Sign Up</Nav.Link>
                                    </LinkContainer>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
