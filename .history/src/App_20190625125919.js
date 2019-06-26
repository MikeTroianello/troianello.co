import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Colors from './components/Colors';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='Colors.js'>COLOR SCHEME</Link>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/colors' />
          <Route exact path='/about' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
