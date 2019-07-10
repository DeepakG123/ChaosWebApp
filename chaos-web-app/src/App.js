import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from "./Components/Homepage.js"
import surge from "./Components/surge.js"
import technologies from "./Components/technologies.js"
import team from "./Components/team.js"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/surge" component={surge}></Route>
        <Route exact path="/technologies" component={technologies}></Route>
        <Route exact path="/team" component={team}></Route>
      </Router>"
    </div>
  );
}

export default App;
