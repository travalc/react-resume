import React, { Component } from 'react';
import NamePlate from './components/NamePlate';
import Profile from './components/Profile';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NamePlate />
        <hr className='TopHr'/>
        <Profile />
        <Skills />
      </div>
    )
  }
}

export default App;
