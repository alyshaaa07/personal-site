import React from 'react';
import Ticker from 'react-ticker';
import "./Home.css";


function Home () {
  return(    
    <div>
      <div className="section-container hero">
        <div className="content-container intro">
          <h1 className="heading fade-in">
            Hi, I’m Alisha, a UX 
            designer based in 
            Sydney , Australia.
          </h1>
        </div>
      </div>
    
      <div className="banner fade-in">
        <Ticker>
          {() => (
              <>
                  <p style={{paddingRight: '1em'}}>Designer. Developer. Creator :)</p>
              </>
          )}
        </Ticker>
      </div>
 
      <div className="section-container skills">
        <div className="content-container skillset fade-in">
          <p className="skills-label">Skills</p>
          <ul className="skills-list">
            <li>> UX Research</li>
            <li>> Wireframing</li>
            <li>> Mobile Design</li>
            <li>> Web Design</li>
            <li>> HTML, CSS, JS & React.JS</li>
          </ul>
        </div>
      </div>

    </div>
    
  );
}

export default Home;