// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState } from 'react';
import InputBox from './components/InputBox';
import Footer from './components/Footer';
import Graph from './components/Graph';
import Header from './components/Header';
import TopStats from './components/TopStats';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';


function App() {
  return (
    <div>
      <Router>
      
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/logout' component={LogoutPage} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={TopStats} />
        <Route exact path='/' component={InputBox} />
        <Route exact path='/' component={Graph} />
        <Route exact path='/' component={Footer} />

      </Router>

    </div>
  );
}

export default App;