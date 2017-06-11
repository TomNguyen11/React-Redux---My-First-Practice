import React from 'react';
import { RenderRoutes } from '../routes/';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';

const App = ({route}) => (
  <div className="App">
  <Header />
   <RenderRoutes routes={route.routes}/>
 </div>
  
);

App.propTypes = {
  route: PropTypes.object.isRequired
}
export default App;
