import React from 'react';
import Header from "./modules/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestsList from "./modules/tests-list/tests-list";
import Test from './modules/test/test';

import './app.css';

export const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Header/>
          <div className="app-main-view">
            <Switch>
              <Route exact path="/"  component={TestsList} />
              <Route path="/tests" component={TestsList} />
              <Route path="/test/:id" component={Test} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
