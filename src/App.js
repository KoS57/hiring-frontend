import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Frend from './component/Users/Frend';
import Header from './component/Header';
import Device from './component/device/Device';

function App() {
  return (

    <>
      <div className="main-section">
        <Header />
        <Route path='/devices' render={() => <Device />} />
        <Route path='/users' render={() => <Frend />} />
      </div>
    </>
  )
  // }
}

export default App;
