import React from "react";
import { Navigation } from "./Navigation";
import { Cards } from "./Cards";
import {Aboutus} from './Aboutus'
import {Contribute} from './Contribute'
import {Login} from './Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <Navigation />
      
      <Switch>
      <Route path="/home">
        <Cards />
      </Route>
      <Route path="/about">
        <Aboutus />
        </Route>
      <Route path="/contribute">
        <Contribute />
      </Route>
      <Route path="/login">
          <Login />
          </Route>
      
      </Switch>
    </Router>
  );
};
