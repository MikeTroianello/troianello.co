import React, { Component } from 'react';

export default class Greed extends Component {
  render() {
    const { hours } = this.props;
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
        <h1>{greeting()}</h1>
      </div>
    );
  }
}
