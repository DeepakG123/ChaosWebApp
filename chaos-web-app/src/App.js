import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from "./Components/Homepage.js"
import testPage from "./Components/testPage.js"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/testPage" component={testPage}></Route>
      </Router>"
    </div>
  );
}

export default App;
