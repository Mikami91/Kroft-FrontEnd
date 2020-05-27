// Dependencies
import React, { Fragment } from "react";
// Routing
import {
  MemoryRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
// Routes
import routes from "./routes/routes";
// Assets
import logo from "./logo.svg";
// Styles
import "./App.css";

function App() {
  return (
    <Fragment>
      {/* <Router> */}
        <Switch>
          {routes.map((prop, key) => {
            if (prop.path !== null) {
              return (
                <Route
                  exact
                  path={prop.path}
                  component={() => <prop.component />}
                  // component={prop.component}
                  key={key}
                />
              );
            }
            return <Route component={"NoFound"} />;
          })}
        </Switch>
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
