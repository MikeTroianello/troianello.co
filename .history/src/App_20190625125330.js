import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Colors from './components/Colors';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Link to='./components/Colors.js' />
      <Router>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/colors' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
