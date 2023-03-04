import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import EditProject from './components/projects/EditProject';
import DeleteProject from './components/projects/ DeleteProject'
import DeleteSkill from './components/skills/DeleteSkill';
import Dashboard from './components/Dashboard';
import AddProject from './components/projects/AddProject';

import AddSkill from './components/skills/AddSkill';
import EditSkill from './components/skills/EditSkill';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/add-project">
            <AddProject />
          </Route>
          <Route path="/edit-project/:id">
            <EditProject />
          </Route>
          <Route path="/delete-project/:id">
            <DeleteProject />
          </Route>
          <Route path="/add-skill">
            <AddSkill />
          </Route>
          <Route path="/edit-skill/:id">
            <EditSkill />
          </Route>
          <Route path="/delete-skill/:id">
            <DeleteSkill />
          </Route>
        </Switch>
        <LogoutButton />
      </div>
    </Router>
  );
}

export default App;
