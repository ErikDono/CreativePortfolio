import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Navi from "./pages/Nav"
import Portfolio from "./pages/Portfolio"
import './App.css';
import Footer from "./components/Footer/Footer"
import Farm from "./assets/farm.jpg"

const App = (prop) => (
  
  <Router>
    <div class= "main">
      <Navi />
      <Route exact path="/CreativePortfolio" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      <Footer />
    </div>

  </Router>

);

export default App;
