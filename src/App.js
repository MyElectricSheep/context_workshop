import React from "react";
import Home from "./Home"
import Admin from "./Admin"
import { Link, Route } from "react-router-dom";

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
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
    </div>
  );
};

export default App;
