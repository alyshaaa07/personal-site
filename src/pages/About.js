import React from 'react';
import './About.css';
import beach from '../assets/images/beach.png';
import book from '../assets/images/book.png';
import candyfloss from '../assets/images/candyfloss.png';
import home from '../assets/images/home.png';
import hotchoc from '../assets/images/hotchoc.png';
import pasta from '../assets/images/pasta.png';
import smirnoff from '../assets/images/smirnoff.png';
import sunset from '../assets/images/sunset.png';
import tropical from '../assets/images/tropical.png';


function About () {
  return(    
    <div>
      <div className="section-container">
        <div className="content-container">
          <h1 className="about-heading1">
            Hooman who loves design
          </h1>
          <br/>
          <br/>
        </div>
      </div>
    
      <div className="section-container hero">
        <div className="content-container">
          <p className="about-points">For the last 3 years, I've been 
            freelancing as a UI/UX designer and 
            have had the chance to work on 
            pretty cool projects.
            </p>
            <p className="about-points">My favorite design tool is Figma, 
            though I'm fine working with Sketch, 
            Adobe CC and others as well. 
            </p>
            <p className="about-points" >Apart from work, I enjoy taking 
            photos of food, making the perfect 
            cup of hot chocolate, reading 
            historical romances / self development
            books and connecting with nature :)
            </p>
        </div>
      </div>

      <div className="section-container images">
        <div className="content-container gallery">

          <div className="photo-items">
            <img src={beach} alt="beach"/>
            <img src={sunset} alt="sunset"/>
            <img src={smirnoff} alt="smirnoff"/>
            <img src={home} alt="home"/>
            <img src={candyfloss} alt="candyfloss"/>
            <img src={tropical} alt="tropical"/>
            <img src={pasta} alt="pasta"/>
            <img src={book} alt="book"/>
            <img src={hotchoc} alt="hotchoc"/>
          </div>
          
        </div>
      </div>

    </div>
    
  );
}

export default About;