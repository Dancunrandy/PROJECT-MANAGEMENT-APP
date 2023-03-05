import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';
import ProjectForm from './components/projects/projectForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route path="/projectform">
            <ProjectForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
