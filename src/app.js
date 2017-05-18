import React, { Component } from 'react';
import NamePlate from './components/NamePlate';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    )
  }
}

export default App;
