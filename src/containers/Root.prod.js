import React from 'react';
import PropTypes from 'prop-types'
import { RenderRoutes } from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = ({routes, history}) => (
  <Router history={history}>
    <div>
      <RenderRoutes routes={routes}/>
    </div>
  </Router>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Root;

