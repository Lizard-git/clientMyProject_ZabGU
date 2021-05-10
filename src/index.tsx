import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from "./redusers/index";/* store from redux */
import './i18n';
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={(<div>Loading ...</div>)}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
