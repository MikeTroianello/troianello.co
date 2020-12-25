import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/locations/Home/Home';
import About from './components/locations/About/About';
import Projects from './components/locations/projects/Projects';
import ProjectPage from './components/locations/projects/ProjectPage';
import Contact from './components/locations/Contact/Contact';
import NotFound from './components/locations/NotFound';
// import Greet from './components/Greet/Greet.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route
                exact
                path='/contact'
                component={Contact}
                bg={'contact-page'}
              />
              <Route
                exact
                path='/sunlog_privacy_policy'
                render={() => {
                  window.location.href = './assets/sunlog-privacy-policy.html';
                }}
              />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
