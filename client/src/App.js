// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import './styles/styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState } from 'react';
import InputBox from './components/InputBox';
import Footer from './components/Footer';
import Graph from './components/Graph';
import Header from './components/Header';
import TopStats from './components/TopStats';
import LoginPage from './components/LoginPage';



function App() {
  return (
    <div>
      <Router>
      
        <Route exact path='/login' component={LoginPage} />
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