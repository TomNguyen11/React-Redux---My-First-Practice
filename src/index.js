import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

import { createBrowserHistory } from 'history';
import { routes } from './routes/';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} routes={routes} history={history}/>
, document.getElementById('root'));
registerServiceWorker();