import React, { Component } from 'react';

class NamePlate extends Component {
  render() {
    return (
      <div className='NamePlate'>
        <div className="NameAndTitle">
          <h1 className='Name'>TRAVIS ALCANTARA</h1>
          <h2 className='Title'>WEB DEVELOPER</h2>
        </div>
        <div className='ContactInfo'>
          <span>Phone: (510) 363 - 2370</span>
          <span>E-Mail: travis.alcantara@gmail.com</span>
          <span><strong>Web: www.travis-alcantara.com</strong></span>
        </div>
      </div>
    )
  }
}

export default NamePlate;
