import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Signup from './signup/Signup'

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/signup' component={Signup} />
          
        </Switch>
      </div>

    </BrowserRouter>
  )
}

export default App;
