import { render, hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import GateKeeper from '../client/container/gatekeeper';
import { Provider } from 'react-redux';
import configureStore from '../client/store';

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const app = document.getElementById('root');

const store = configureStore(initialState);

hydrate(
  <Provider store={store}>
    <Router>
      <GateKeeper />
    </Router>
  </Provider>,
  app
);
