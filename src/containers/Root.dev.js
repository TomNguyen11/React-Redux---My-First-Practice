import React from 'react';
import PropTypes from 'prop-types'
import { RenderRoutes } from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <RenderRoutes routes={routes} />
        <DevTools />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Root;

