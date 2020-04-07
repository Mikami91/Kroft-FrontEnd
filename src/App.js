// Dependencies
import React, { Fragment } from 'react';
// Routing
import { Switch, Route, withRouter } from "react-router-dom";
// Routes
import routes from './routes/routes';
// Assets
import logo from './logo.svg';
// Styles
import './App.css';

function App() {
  return (
    <Fragment>
      <Switch>
        {routes.map((prop, key) => {
          if (prop.path !== null ) {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          return <Route component={"NoFound"} />;
        })}
      </Switch>
    </Fragment>
  );
}

export default withRouter(App); 
