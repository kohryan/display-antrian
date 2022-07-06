import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          {/* <Navbar/> */}
          <Navbar/>
          <Welcome/>
      </Router>
    </div>
  );
}

export default App;
