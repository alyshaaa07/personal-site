import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";


import meImage from '../assets/images/meee.png';

function Header () {
  return (
    <div className="nav-bar">
      <Link to="/" ><img class="logo" src={meImage} alt=''/></Link>
      <div className="nav-items">
        <a className="nav-link" href="#" >Projects ></a>
        <Link to="/about" ><a className="nav-link" href="#" >About ></a></Link>
      </div>
    </div>
  );
}

export default Header;

