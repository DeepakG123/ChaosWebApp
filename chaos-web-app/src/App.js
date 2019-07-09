import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from "./Components/Homepage.js"
import testPage from "./Components/testPage.js"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBT3sRryVV0APlRS9Hcqb6-LsgcSSSdw4g",
  authDomain: "caas-a3e3c.firebaseapp.com",
  databaseURL: "https://caas-a3e3c.firebaseio.com",
  projectId: "caas-a3e3c",
  storageBucket: "",
  messagingSenderId: "170546946739",
  appId: "1:170546946739:web:71f357a88b071e0b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
