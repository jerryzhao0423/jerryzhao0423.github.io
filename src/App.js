import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { Portfolio } from "./pages/Portfolio/Portfolio";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Homepage />;
          }}
        />

        <Route
          exact
          path="/portfolio"
          render={() => {
            return <Portfolio />;
          }}
        />

        {/* not found */}
        <Route
          render={() => {
            return <div>Invalid url</div>;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
