import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard/Dashboard';
import DreamJournal from './modules/DreamJournal/DreamJournal';
import NewDream from './modules/NewDream/NewDream';
import Analytics from './modules/Analytics/Analytics';

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dreamjournal" component={DreamJournal} />
        <Route exact path="/newdream" component={NewDream} />
        <Route exact path="/analytics" component={Analytics} />
      </Switch>
    </main>
  );
};

export default App;
