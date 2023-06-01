import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Home from "./routes/Home";
import About from "./routes/About"
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path='/about' component={About}/>
    </HashRouter>
  )
}

export default App;
