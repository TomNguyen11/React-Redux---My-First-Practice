import React, { Component } from 'react';
import '../../css/style01.css';

class NoMatch extends Component {
  render() {
    return (
      <h1>
        Page Not Found - <span className="error">404</span>
      </h1>
    );
  }
}

export default NoMatch;

