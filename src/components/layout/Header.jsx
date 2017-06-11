import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../css/logo.svg';
import '../../css/App.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to My Website</h2>
         <nav className="nav-menu">
          <ul className="clear-fix">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/nothing">Nothing</Link></li>
          </ul>
         </nav>
       </div>
       <p className="App-intro">
         My Practice
       </p>
      </div>
    );
  }
}
