import React from 'react';
import { Container } from "react-bootstrap";
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import Header from "./common/Header";
import Home from "./pages/Home";
import Properties from './pages/Properties/PropertiesScreen';
import Footer from './common/Footer';

import Test from './common/Test';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/properties' component={Properties}/>
            <Redirect to='/'/>
          </Switch>
          {/* <Test /> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
