import React, { useReducer } from 'react';
import { Container } from "react-bootstrap";
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from "./common/Header";
import Home from "./pages/Home";
import PropertiesScreen from './pages/Properties/PropertiesScreen';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Footer from './common/Footer';
import { UserContext } from './utils/context/userContext'
import userReducer from './utils/reducers/userReducer'

const initialState = {
  isLoggedIn: localStorage.getItem("jwt")? true: false,
  user: localStorage.getItem("user") || null,
  jwt: localStorage.getItem("jwt") || null,
  error: null
};

const App = () => {

  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header />
 
        <main className='py-3'>
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/properties' component={PropertiesScreen} />
              <Route path='/login' render={(props) => <Login {...props}/>} />
              <Route path='/login' component={Login} />
            <Route path='/sign_up' component={SignUp} />
            <Redirect to='/' />
              <Redirect to='/' />
            </Switch>
          </Container>
        </main>

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
