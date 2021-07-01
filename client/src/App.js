import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Main from './components/Main';




function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/main' component={Main} />
      </Router>

    </div>
  );
}

export default App;