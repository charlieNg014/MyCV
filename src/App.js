import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

//reusable items
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:slug" component={ProjectDetails} />
    </Switch>
    </>
  )
}

export default App;
