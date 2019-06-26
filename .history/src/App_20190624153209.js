import React from 'react';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Color Schemes</h1>
        <div className='seahawks'>
          <div className='s-blue'>#002145</div>
          <div className='s-gray'>#A5ACAF</div>
          <div className='s-green'>#66C010</div>
        </div>
        <div className='dolphins'>
          <div className='d-aqua'>#0091A0</div>
          <div className='s-orange'>#FF8500</div>
          <div className='s-dark-blue'>#002760</div>
        </div>
        <div className='cowboys'>
          <div className='c-blue'>#0C264C</div>
          <div className='c-gray'>#B0B7BC</div>
          <div className='c-white'>#FFFFFF</div>
        </div>
        <div className='giants'>
          <div className='g-blue'>#192EGC</div>
          <div className='g-red'>#B20032</div>
        </div>
      </header>
    </div>
  );
}

export default App;
