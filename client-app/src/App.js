import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import ProjectForm from './components/projects/projectForm';
import SkillForm from './components/skills/SkillForm';
import DeleteProject from './components/projects/DeleteProject';
import EditProject from './components/projects/EditProject';
import AddSkill from './components/skills/AddSkill';
import DeleteSkill from './components/skills/DeleteSkill';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/deleteskill">
            <DeleteSkill />
          </Route>
          <Route path="/addskill">
            <AddSkill />
          </Route>
          <Route path="/editproject">
            <EditProject />
          </Route>
          <Route path="/deleteproject">
            <DeleteProject />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/skillform">
            <SkillForm />
          </Route>
          <Route path="/projectform">
            <ProjectForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
