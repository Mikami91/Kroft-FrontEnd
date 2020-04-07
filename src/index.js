// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { BrowserRouter as Router, HashRouter  } from "react-router-dom";
// Redux
import { Provider } from 'react-redux';
// import store from '../src/redux/store.js';
// Themes
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../src/themes/theme.js';
// Styles
import './index.css';
// App
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <Provider store={store}>
      <MuiThemeProvider theme={theme} >
        <Router history={HashRouter}>
          <App />
        </Router>
      </MuiThemeProvider>
    // </Provider>
    ,
  document.getElementById('root')
);

serviceWorker.register();
