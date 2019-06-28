import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/locations/Home';
import Colors from './components/locations/Colors';
import About from './components/locations/About';
import Projects from './components/locations/Projects';
import Contact from './components//locations/Contact';
import NotFound from './components/locations/NotFound';
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
              <Route exact path='/colors' component={Colors} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
