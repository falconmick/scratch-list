/* eslint-disable import/default */
import 'babel-polyfill'; // todo: only get pollyfils we need
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bulma';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../node_modules/toastr/build/toastr.min.css';
/* uncomment if you want to add routing
 import { Router, browserHistory } from 'react-router';
 import routes from './routes';
 import { syncHistoryWithStore } from 'react-router-redux';
 */
import App from './components/App';

const store = configureStore();
/* uncomment if you want to add routing
 // Create an enhanced history that syncs navigation events with the store
 const history = syncHistoryWithStore(browserHistory, store);
 */

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
