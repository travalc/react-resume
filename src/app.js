import React, { Component } from 'react';
import NamePlate from './components/NamePlate';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NamePlate />
        <hr className='TopHr'/>
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <hr />
      </div>
    )
  }
}

export default App;
