import React from 'react';
import './App.css';

import Title from './components/title'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/" exact component={Title} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
