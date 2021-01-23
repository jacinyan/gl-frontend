import React from 'react'
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import Birthday from './Birthday';
import Corporate from './Corporate';
// import Wedding from './Wedding';

const Properties = () => {
    return (
        <div>
            <h3>This is properties</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <Link to='/properties/corporate'>Corporate</Link>
                    </li>
                    <li>
                        <Link to='/properties/birthday'>Birthday</Link>
                    </li>
                </ul>
            </div>
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
