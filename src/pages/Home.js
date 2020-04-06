import React from 'react';
import "./Home.css";


function Home () {
  return(    
    <div>
      <div className="section-container hero">
        <div className="content-container intro">
          <h1 className="heading">
            Hi, I’m Alisha, a UX 
            designer based in 
            Sydney , Australia.
          </h1>
        </div>
      </div>
    
      <p className="banner">
        Designer. Developer. Creator :)
      </p>
 
      <div className="section-container skills">
        <div className="content-container skillset">
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