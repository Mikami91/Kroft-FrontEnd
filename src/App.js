// Dependencies
import React, { Fragment } from "react";
// Routing
import {
  MemoryRouter as Router,

  Route, Switch
} from "react-router-dom";
// Styles
import "./App.css";
// Pages
import NotFound from "./pages/NotFound";
// Routes
import routes from "./routes/routes";

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
          })}
          <Route component={NotFound} />
        </Switch>
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
