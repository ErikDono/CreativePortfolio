import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" 
import Container from 'react-bootstrap/Container';
import About from "./pages/About"

import  Navi  from "./pages/Nav"
import  Portfolio   from "./pages/Portfolio"
import './App.css';

const App = (prop) => (
  <Router>
<div>
<Navi />
      <Route exact path="/" component={ About } />
      <Route exact path="/portfolio" component={ Portfolio } />
    </div>
  
  </Router>
);

export default App;
