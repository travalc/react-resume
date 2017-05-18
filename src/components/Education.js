import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className='Education'>
        <h4 className='headline'>EDUCATION:</h4>
        <div className='school-entry'>
          <h3><strong>University of California, Berkeley</strong></h3>
          <p className='school-term'><em>2007 - 2012</em></p>
          <ul>
            <li><p>B.A. in Political Economy with concentration in Globalization</p></li>
            <li><p>GPA: 3.5</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Education;
