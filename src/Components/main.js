// i will not import component b/c this not going to be a class based component, b/c it is statelest component
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Navigation from './navigation';
import Blog from './blog';


const Main = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/aboutme" component={AboutMe} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/projects" component={Projects} />
      <Route  path="/resume" component={Resume} />
      <Route  path="/navigation" component={Navigation} />
      <Route  path="/blog" component={Blog} />
     
    </Switch>
)

export default Main;