import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

function Projects() {
  return (
    <div className="firstContainer">
      <h1>Skills Page</h1>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <Link to="/contact">
        <p>Contact Me</p>
      </Link>
    </div>
  );
}

export default Projects;