import React from 'react';
import '../App.css';

import pong from '../projectImg/pong.png'
import Netforce from '../projectImg/Netforce.png'
import RM from '../projectImg/rickandmorty.png'
import charts from '../projectImg/Charts.png'
import HelpingHand from '../projectImg/helpinghand.png'

import { FaGithubAlt, FaSignInAlt } from "react-icons/fa";

import {Link} from 'react-router-dom';

function Projects() {
  return (
    <div className="firstContainer">
      <div className="secondContainer">
        <div className="skillsTitle">
          <div className="projectsTitleContainer">
          <h1 id="projTitle">Projects</h1><h1>Page</h1>
          </div>
        </div>
        <div className="skillsLinks">
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
        <hr />
        <div className="projectsContainer"> 
          <div className="singleProj">
            <h2>Rick and Morty website and quiz</h2>
            <p>Using a Rick and Morty API I created a quiz that 
              tells you which of the 495 Rick and Morty 
              characters you are. Created with Javascript</p>
              <img src={RM}  alt={''}/>
              <div className="gitInt">
              <a href="https://distracted-lichterman-b05c7e.netlify.com/">
                <FaSignInAlt className="signin"/>
              </a>
              <a href="https://github.com/TridKay99/JS-rickandmorty">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
          </div>
          <div className="singleProj">
            <h2>Netforce</h2>
            <p>An application to help you find a movie to watch using an API
               for Netflix and Stan. Made with HTML, Javascript</p>
              <img src={Netforce} alt={''}/>
              <div className="gitInt">
              <a href="https://elegant-agnesi-5a943c.netlify.com/shityaknickers.html">
                <FaSignInAlt className="signin"/>
              </a>
              <a href="https://github.com/TridKay99/RandomHorrorFilm">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
          </div>
          <div className="singleProj">
            <h2>HelpingHand</h2>
            <p>An application that connects workers with jobs that anyone can post. 
              Created with Ruby on Rails</p>
              <img src={HelpingHand} alt={''}/>
              <div className="gitInt">
              <a href="https://damp-forest-41444.herokuapp.com/">
                <FaSignInAlt className="signin"/>
              </a>
              <a href="https://github.com/TridKay99/helpingrails">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
          </div>
          <div className="singleProj">
            <h2>Pong</h2>
            <p>Fully functional Pong game vs AI. Made with Javascript</p>
              <img src={pong} alt={''}/>
              <div className="gitInt">
              <a href="https://github.com/TridKay99/JS-Pong">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
          </div>
          <div className="singleProj">
            <h2>Top 10 pop charts</h2>
            <p>Using an API to keep up to date with the top 10 pop charts. Updates with the API. Created with React & Express.</p>
              <img src={charts} alt={''}/>
              <div className="gitInt">
              <a href="https://github.com/TridKay99/musicAPI-React">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Projects;