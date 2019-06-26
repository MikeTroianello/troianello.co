import React from 'react';

export default function Colors() {
  return (
    <div className='App-header'>
      <h1>Color Schemes</h1>
      <div className='container-fluid'>
        {/* <div>
            <h1 className='col-3'>SEAHAWKS</h1>
            <h1 className='col-3'>DOLPHINS</h1>
            <h1 className='col-3'>COWBOYS</h1>
            <h1>GIANTS</h1>
          </div> */}
        <div className='row'>
          {/* <div className='teams seahawks'> */}

          <div className='col-1 s-blue'>#002145</div>
          <div className='col-1 s-gray'>#A5ACAF</div>
          <div className='col-1 s-green'>#66C010</div>
          {/* </div> */}
          {/* <div className='col-1 teams dolphins'> */}

          <div className='col-1 d-aqua'>#0091A0</div>
          <div className='col-1 d-orange'>#FF8500</div>
          <div className='col-1 d-dark-blue'>#002760</div>
          {/* </div> */}
          {/* <div className='col-1 teams cowboys'> */}

          <div className='col-1 c-blue'>#0C264C</div>
          <div className='col-1 c-gray'>#B0B7BC</div>
          <div className='col-1 c-white'>#FFFFFF</div>
          {/* </div> */}
          {/* <div className='teams giants'> */}

          <div className='col-1 g-blue'>#192E6C</div>
          <div className='col-1 g-red'>#B20032</div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
