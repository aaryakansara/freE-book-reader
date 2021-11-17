import React from "react";
import { Navigation } from "./Navigation";
import { Catrom } from "./Catrom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Cathome = () => {
    return (
      <Router>
        <Navigation />
        
        <Switch>
        <Route path="/catrom">
          <Catrom />
        </Route>

        </Switch>
    </Router>
  );
};