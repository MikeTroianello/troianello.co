import React, { Component } from 'react';
import "./Greet.css";
import './GreetMobile.css';
import './Greet4k.css';

export default class Greed extends Component {
  constructor(props){
    super(props);
    this.state={
      hours: null
    }
  }

  componentWillMount(){
    let date = new Date();
    let hours = date.getHours();
    this.setState({hours: hours})
  }

  render() {
    const { hours } = this.state;
    function greeting() {
      if (hours < 12) {
        return 'Good Morning!';
      } else if (hours >= 12 && hours < 18) {
        return 'Good Afternoon!';
      } else {
        return 'Good Evening!';
      }
    }
    return (
      <div>
        <h1 className="greeting">{greeting()}</h1>
      </div>
    );
  }
}
