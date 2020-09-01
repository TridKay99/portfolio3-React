import React from 'react';
import '../App.css';

import Fade from 'react-reveal/Fade';

import ruby from '../skillsImg/ruby.png'
import js from '../skillsImg/JS.jpg'
import html from '../skillsImg/html.png'
import css from '../skillsImg/css.png'
import git2 from '../linkPics/git.png'
import heroku from '../skillsImg/heroku.png'
import mongo from '../skillsImg/mongo.png'
import react from '../skillsImg/react.png'
import premiere from '../skillsImg/premiere.png'
import after from '../skillsImg/after_effects.png'
import photoshop from '../skillsImg/photoshop.png'

// import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

function Greetings(props) {
  return (
    <Fade bottom cascade>
    <div className="skillLabel">
      <img src={props.img} alt={''} width="70" height="70"/>
      <p>{props.name}</p>
    </div>
    </Fade>
  )
}

function Skills() {
  const skills =['Ruby on Rails','Javascript','HTML','CSS','GitHub','Heroku','MongoDB','React','Premiere Pro','After Effects']
  const skillsImg = [ruby,js,html,css,git2,heroku,mongo,react,premiere,after,photoshop]

  let keySkills = [];

  for(let i = 0; i < skills.length; i++) {
    keySkills.push(<Greetings key={i} name={skills[i]} img={skillsImg[i]} />);
  }
  return (
    <div className="firstContainer">
      <div className="secondContainer">
        <div className="skillsTitle">
          <div className="skillsTitleContainer">
            <h1 id="skillsPage">Skills</h1><h1> Page</h1>
          </div>
        </div>
        <div className="skillsLinks">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="keySkillsContainer">
          <div className="keySkills">
            {keySkills}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;