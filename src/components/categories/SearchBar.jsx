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
    //this.props.onFilterTextInput(e.target.value);
    this.props.actions.loadSearchResult(e.target.value);
    console.log()
  }

  handleInStockInputChange(e) {
    //this.props.onInStockInput(e.target.checked);
    this.props.actions.toggleStock(e.target.checked);
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