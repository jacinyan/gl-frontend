import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Birthday from './Birthday';
import Corporate from './Corporate';
// import Wedding from './Wedding';

const Properties = () => {
    return (
        <div>
            <h3>Properties</h3>

            <Nav variant="tabs" as="ul">
                <Nav.Item as="li">
                    <LinkContainer to="/properties/corporate" eventKey="/properties/corporate">
                        <Nav.Link >Corporate</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                    <LinkContainer to="/properties/birthday" eventKey="/properties/birthday">
                        <Nav.Link >Birthday</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                {/* <Nav.Item as="li">
                    <LinkContainer to="/properties/wedding" eventKey="/properties/wedding">
                        <Nav.Link >Corporate</Nav.Link>
                    </LinkContainer>
                </Nav.Item> */}
            </Nav>
            <Switch>
                <Route path='/properties/corporate' component={Corporate}></Route>
                {/* <Route path='/properties/wedding' component={Wedding}></Route> */}
                <Route path='/properties/birthday' component={Birthday}></Route>
                <Redirect to='/properties/corporate' />
            </Switch>
        </div>
    )
}

export default Properties
