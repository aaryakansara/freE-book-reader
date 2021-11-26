import React from "react";
import { Navigation } from "./Navigation";
import { Cards } from "./Cards";
import { Aboutus } from './Aboutus';
import { Contribute } from './Contribute';
import { Login } from './Login';
import { CreateAccount } from "./CreateAccount";
import { AdminLogin } from "./AdminLogin";
import { Categories } from "./Categories";
import { Loggedinhome } from "./Loggedinhome";
import { Fogpass } from "./Fogpass";
import { Foginst } from "./Foginst";
import { Congrats } from "./Congrats";
import { Cathome } from "./categfile/Cathome";
import { Catrom } from "./categfile/Catrom";
import { Catadv } from "./categfile/Catadv";
import { Catarts } from "./categfile/Catarts";
import { Catastro } from "./categfile/Catastro";
import { Catbio } from "./categfile/Catbio";
import { Catbusiness} from "./categfile/Catbusiness";
import { Catcomic} from "./categfile/Catcomic";
import { Catcrime } from "./categfile/Catcrime";
import { Catdrama } from "./categfile/Catdrama";
import { Catfiction } from "./categfile/Catfiction";
import { Catgeo } from "./categfile/Catgeo";
import { Catguide } from "./categfile/Catguide";
import { Cathistory } from "./categfile/Cathistory";
import { Cathorror } from "./categfile/Cathorror";
import { Catlit } from "./categfile/Catlit";
import { Catnonfic } from "./categfile/Catnonfic";
import { Catpoet } from "./categfile/Catpoet";
import { Catpsych } from "./categfile/Catpsych";
import { Catsci } from "./categfile/Catsci";
import { Catscifi } from "./categfile/Catscifi";
import { Catsport } from "./categfile/Catsport";
import { Catsus } from "./categfile/Catsus";
import { Catthrill } from "./categfile/Catthrill";
import { Cattravel } from "./categfile/Cattravel";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <Navigation />
      
      <Switch>
      <Route path="/home">
        <Cards />
      </Route>
      <Route path="/loggedin">
        <Loggedinhome />
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
      <Route path="/admin">
        <AdminLogin />
      </Route>
      <Route path="/forgot">
        <Fogpass />
      </Route>
      <Route path="/foginst">
        <Foginst />
      </Route>
      <Route path="/congrats">
        <Congrats />
      </Route>
      <Route path="/cathome">
        <Cathome />
      </Route>
      <Route path="/catrom">
        <Catrom />
      </Route>
      <Route path="/catadv">
        <Catadv />
      </Route>
      <Route path="/catarts">
        <Catarts />
      </Route>
      <Route path="/catastro">
        <Catastro />
      </Route>
      <Route path="/catbio">
        <Catbio />
      </Route>
      <Route path="/catbusiness">
        <Catbusiness />
      </Route>
      <Route path="/catcomic">
        <Catcomic />
      </Route>
      <Route path="/catcrime">
        <Catcrime />
      </Route>
      <Route path="/catdrama">
        <Catdrama />
      </Route>
      <Route path="/catfiction">
        <Catfiction />
      </Route>
      <Route path="/catgeo">
        <Catgeo />
      </Route>
      <Route path="/catguide">
        <Catguide />
      </Route>
      <Route path="/cathistory">
        <Cathistory />
      </Route>
      <Route path="/cathorror">
        <Cathorror />
      </Route>
      <Route path="/catlit">
        <Catlit />
      </Route>
      <Route path="/catnonfic">
        <Catnonfic />
      </Route>
      <Route path="/catpoet">
        <Catpoet />
      </Route>
      <Route path="/catpsych">
        <Catpsych />
      </Route>
      <Route path="/catsci">
        <Catsci />
      </Route>
      <Route path="/catscifi">
        <Catscifi />
      </Route>
      <Route path="/catsport">
        <Catsport />
      </Route>
      <Route path="/catsus">
        <Catsus />
      </Route>
      <Route path="/catthrill">
        <Catthrill />
      </Route>
      <Route path="/cattravel">
        <Cattravel />
      </Route>
     
      
      </Switch>
    </Router>
  );
};
