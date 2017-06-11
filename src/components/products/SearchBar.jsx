import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propsType = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    // call function onFilterTextInput in parent
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    // call function onInStockInput in parent
    this.props.onInStockInput(e.target.checked);
  }
  
  render() {
    return (
      <form className="form-search">
        <input
          type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          onChange={this.handleInStockInputChange}
        />
        {''}
        Only stock
      </form>
    );
  }
}