// Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Routing
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
// Date Picker
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// Themes
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/themes/theme.js";
// Styles
import "./index.css";
// App
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <MuiThemeProvider theme={theme}>
        <Router history={HashRouter} basename={"sansilvestre/"}>
          <App />
        </Router>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
