import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/locations/Home/Home';
import About from './components/locations/About/About';
import Projects from './components/locations/Projects';
import Contact from './components/locations/Contact/Contact';
import NotFound from './components/locations/NotFound';
// import Greet from './components/Greet/Greet.js';
import './App.css';

class App extends Component {
  // state = {
  //   header: '',
  //   hours: new Date().getHours()
  // };

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = event => {
  //   let scrollTop = event.srcElement.body.scrollTop;
  //   console.log(window.scrollY);
  //   // if(window.scrollY > 200 && this.state.header) {
  //   if (window.scrollY < 88) {
  //     this.setState({ header: '' });
  //     console.log(this.state.header);
  //   }
  //   if (window.scrollY > 88 && window.scrollY < 502) {
  //     this.setState({ header: <Greet classname='header-greet' /> });
  //     console.log(this.state.header);
  //   }
  //   if (window.scrollY > 503 && window.scrollY < 1266) {
  //     this.setState({ header: 'My Projects' });
  //     console.log(this.state.header);
  //   }
  //   if (window.scrollY > 1267) {
  //     this.setState({ header: 'About Me' });
  //     console.log(this.state.header);
  //   }
  // };

  render() {
    return (
      <div className='App'>
        <Router>
          {/* <Header showHeader={this.state.header} /> */}
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
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
