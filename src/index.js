/* eslint-disable import/default */
import 'babel-polyfill'; // todo: only get pollyfils we need
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bulma';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../node_modules/toastr/build/toastr.min.css';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {syncHistoryWithStore} from 'react-router-redux';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>, document.getElementById('app')
);
