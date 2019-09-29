import React from "react";
import { HashRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const App = () => (
  <Router>
    <nav>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/" exact>
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profil</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
