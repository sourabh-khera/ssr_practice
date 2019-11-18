const express =  require('express');
import ReactDomServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import GateKeeper from '../client/container/gatekeeper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../client/reducers';
import store from '../client/store';
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(express.static('build'));


const handleRender = (req, res) => {
  const store = createStore(rootReducer);   
  const context = {};
  const content = ReactDomServer.renderToString(
    <Provider store={store}> 
      <StaticRouter url={req.url} context={context}>
        <GateKeeper /> 
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();
  const state = `<script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
</script>`
  res.render('index', { content, state });
};
app.use(handleRender);


// app.get('/*', (req, res) => {
//   const context = {};
//   const content =  ReactDomServer.renderToString(
//     <StaticRouter url={req.url} context={context}>
//       <GateKeeper /> 
//     </StaticRouter>
//   );
//   res.render('index', {content})
// });


app.listen(3000, () => {
  console.log('server listening on port : 3000');
});

