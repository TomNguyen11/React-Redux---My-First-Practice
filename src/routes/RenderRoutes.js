import React from 'react';
import Switch from 'react-router/Switch';
import Route from 'react-router/Route';
import PropTypes from 'prop-types';

const RenderRoutes = ({routes}) => {
  if (!routes) {
    return null;
  }
  routes.forEach((route) => {
    if (!route.routes) {
      return;
    }
  });

  return (
    <Switch>
      {routes.map((route, i) => (
        <Route 
          key={i} 
          path={route.path}
          exact={route.exact}
          strict={route.strict} render={(props) => (
            <div>
              <route.component {...props} route={route}/>
            </div>
          )} />
      ))}
    </Switch>
  );
}

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default RenderRoutes;

