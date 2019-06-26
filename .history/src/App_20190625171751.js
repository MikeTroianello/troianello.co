import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/locations/Home';
import Colors from './components/locations/Colors';
import About from './components/locations/About';
import NotFound from './components/locations/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/colors' component={Colors} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
