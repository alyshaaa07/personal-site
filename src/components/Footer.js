import React from 'react';
import "./Footer.css";


function Footer () {
  return (
    <div className="section-container footer-container">
        <div className=" footer-content content-container">
          <p className="footer-social">Say hi -</p>
          <a className="footer-connect footer-email" href="mailto:alisha.designer@outlook.com">
            E-Mail
          </a>
          <p className="footer-social">Find me on -</p>
          <a className="footer-connect" href="https://dribbble.com/alyshaaa_07">
            dribbble
          </a>
        </div>
      </div>
  );
}

export default Footer;