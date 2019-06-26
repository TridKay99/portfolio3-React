import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

function Skills() {
  return (
    <div className="firstContainer">
      <h1>Projects Page</h1>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/skills">
        <p>Skills</p>
      </Link>
      <Link to="/contact">
        <p>Contact Me</p>
      </Link>
    </div>
  );
}

export default Skills;