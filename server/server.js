const express =  require('express');
const axios = require('axios');
import ReactDomServer from 'react-dom/server';
import React from 'react'; 
import { StaticRouter, matchPath } from 'react-router-dom';
import GateKeeper from '../client/container/gatekeeper';
import middlewares from '../client/middlewares';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import reducer from '../client/reducers';
import routes from '../client/config/routes_config';
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(express.static('build'));

const handleRender = (req, res) => {
  const store = createStore(reducer, applyMiddleware(...middlewares));   
  const promises = [];
  routes.some(route => {
     const match = matchPath(req.path, route.path);
     if(match && route.component.need){
       promises.push(route.component.need.fetchUsersList(store));
     }
  }); 
  Promise.all(promises).then(data => {
    const context = {};
    const content = ReactDomServer.renderToString(
      <Provider store={store}> 
        <StaticRouter url={req.url} context={context}>
          <GateKeeper /> 
        </StaticRouter>
      </Provider>
    );
    const finalState = store.getState();
    const state = `<script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
        /</g,
        '\\u003c'
      )}
    </script>`
    res.render('index', { content, state });
  })
  .catch(err => {
    console.log(err, "error----");
  });
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

