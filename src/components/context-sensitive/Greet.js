import React from 'react';

export default function Greet(hours) {
  function greeting() {
    if ({ hours } < 12) {
      return 'Good Morning!';
    } else if ({ hours } >= 12 && { hours } < 5) {
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
