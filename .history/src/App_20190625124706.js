import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
