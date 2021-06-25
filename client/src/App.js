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



function App() {
  // See LoginPage to learn how this is being used.
  const [authenticated, setLogin] = useState(false)

  return (
    <div>
      <Router>
        <LoginPage loggedIn={authenticated} />
        {/* <LogoutPage loggedOut = {authenticated}/> */}
        <Switch>
          <Route exact path='/' component={LoginPage} />
          {/* <Route exact path='/' component={TopStats} />
        <Route exact path='/' component={InputBox} />
        <Route exact path='/' component={Graph} />
        <Route exact path='/' component={Footer} /> */}

          <Header></Header>
          <TopStats></TopStats>
          <InputBox></InputBox>
          <Graph></Graph>
          <Footer></Footer>
        </Switch>

      </Router>

      {/* <Router>
       <Switch> */}
      {/* <Route exact path = '/' component = { Main }/>
         <Route exact path = '/footer' component = { Footer }/> */}
      {/* </Switch>
     </Router> */}
    </div>
  );
}

export default App;