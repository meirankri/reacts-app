import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Details from './component/Details';
import Query from './component/Query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Query} />
          <Route exact path="/detail/:id" component={Details} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
