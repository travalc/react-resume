import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className='Skills'>
        <h4 className='headline'>SKILLS:</h4>
        <ul>
          <li><p><span><strong>Front-End Languages:</strong></span>  HTML5 (Semantic), CSS3,
            Javascript (ES5 / ES6)</p>
          </li>
          <li><p><span><strong>Javascript Frameworks:</strong></span>  React/Redux, JQuery, Knockout JS</p>
          </li>
          <li><p><span><strong>CSS Preprocessors & Libraries:</strong></span>  SASS/SCSS, Bootstrap</p>
          </li>
          <li><p><span><strong>Build Tools:</strong></span>  NPM, Webpack, Babel, Gulp, Grunt</p>
          </li>
          <li><p><span><strong>Version Control:</strong></span>  Git/Github</p>
          </li>
          <li><p><span><strong>Development & Design Principles:</strong></span>  Responsive Design, Object Oriented Programming, Test Driven Development, Asynchronous Programming</p>
          </li>
          <li><p><span><strong>Other Competencies:</strong></span>  Customer Service, Sales & Marketing</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Skills;
