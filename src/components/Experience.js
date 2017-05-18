import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className='Experience'>
        <h4 className='headline'>CAREER DEVELOPMENT:</h4>
        <div className='work-entry'>
          <h3><strong>Fulltime Web Development Study, San Francisco Bay Area</strong></h3>
          <p className='work-term'><em>2015 - Present</em></p>
          <p className='work-description'>
            Description: Dedicated the last year and a half towards developing the essential skills and technologies
            necessary to begin a career as a web developer.
          </p>
          <ul>
            <li><p>Developed an expert level knowledge of fundamental web technologies and languages: HTML, CSS, Javascript</p></li>
            <li><p>Utilized skills and expertise to develop a robust portfolio of projects of varying complexity.</p></li>
            <li><p>Currently seeking freelance work to gain additional industry experience</p></li>
          </ul>
        </div>
        <div className='work-entry'>
          <h3><strong>Uber & Lyft Driver, San Francisco Bay Area</strong></h3>
          <p className='work-term'><em>2015 - Present</em></p>
          <p className='work-description'>
            Description: Currently operating ridesharing business on the Uber and Lyft platforms to earn income while preparing for a career as
            a web developer and to network with other professionals.
          </p>
          <ul>
            <li><p>Safely pick up passengers and drive them to their desired locations in a timely manner.</p></li>
            <li><p>Maintain cleanliness of vehicle and insure regular required maintenance.</p></li>
          </ul>
        </div>
        <div className='work-entry'>
          <h3><strong>Product Specialist - LG Electronics/Marketstar, San Francisco Bay Area</strong></h3>
          <p className='work-term'><em>2013 - 2015</em></p>
          <p className='work-description'>
            Description: Served as primary representative of the LG brand in both national retail stores and wireless carrier stores.
            Territory included San Jose and surrounding cities.
          </p>
          <ul>
            <li><p>Trained retail employees on best sales practices and product features of LG devices.</p></li>
            <li><p>Promoted brand awareness of LG mobile electronics at national retail and wireless carrier locations.</p></li>
            <li><p>Conducted ground level market research on the latest trends regarding consumer behavior and competitor sales.</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Experience;
