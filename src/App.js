import React from "react";
import Home from "./Home"
import Admin from "./Admin"
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/admin">Admin Page</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/admin" component={Admin} />
      <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
