
import React from 'react';
import './css/app.css';
import './Components/main';
import Main from './Components/main';

function App() {
  return (
    <div className='appclass'>
      <div className="header"></div>
      <div className="content">
        <div className="sidebar"></div>
        <Main className="main" />
      </div>
    </div>
  );
}

export default App;
