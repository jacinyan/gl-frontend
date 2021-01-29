import React from 'react';
import { Container } from "react-bootstrap";
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from "./common/Header";
import Home from "./pages/Home";
import PropertiesScreen from './pages/Properties/PropertiesScreen';
import Login from './pages/Login'
import Footer from './common/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/properties' component={PropertiesScreen} />
            <Route path='/login' component={Login} />
            <Redirect to='/' />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
