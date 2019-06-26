import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Colors from './components/locations/Colors';
import About from './components/locations/About';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/colors' component={Colors} />
          <Route exact path='/about' />
          <Route exact path='/projects' component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
