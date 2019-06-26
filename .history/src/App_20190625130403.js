import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Colors from './components/Colors';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>HOME</Link>
        <Link to='/colors'>COLOR SCHEME</Link>

        <Switch>
          <Route exact path='/' />
          <Route exact path='/colors' component={Colors} />
          <Route exact path='/about' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
