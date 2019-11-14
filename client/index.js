import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import GateKeeper from '../client/container/gatekeeper';

const app = document.getElementById('root');

render(
  <Router>
  	<GateKeeper />
  </Router>,
	app
);
