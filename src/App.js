import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/locations/Home/Home";
import About from "./components/locations/About/About";
import Projects from "./components/locations/projects/Projects";
import Contact from "./components/locations/Contact/Contact";
import "./App.css";
import NotFound from "./components/locations/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route
                exact
                path="/contact"
                component={Contact}
                bg={"contact-page"}
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
