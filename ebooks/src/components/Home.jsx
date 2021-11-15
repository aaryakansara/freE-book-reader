import React from "react";
import { Navigation } from "./Navigation";
import { Cards } from "./Cards";
import {Aboutus} from './Aboutus';
import {Contribute} from './Contribute';
import {Login} from './Login';
import { CreateAccount } from "./CreateAccount";
import { Categories } from "./Categories";
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
      <Route path="/categories">
          <Categories />
          </Route>
          
          <Route path="/account">
          <CreateAccount />
          </Route>
      
      </Switch>
    </Router>
  );
};
