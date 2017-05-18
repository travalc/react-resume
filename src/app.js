import React, { Component } from 'react';
import NamePlate from './components/NamePlate';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NamePlate />
        <hr className='TopHr'/>
        <Profile />
      </div>
    )
  }
}

export default App;
