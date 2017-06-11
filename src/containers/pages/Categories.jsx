import React, { Component } from 'react';
import { CategoryList, SearchBar } from '../../components/categories/';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions';

const CATEGORIES= [
  {
    name: "Category 01",
    quatity: 123,
    description: "The Category 01",
    stock: true,
  },
  {
    name: "Category 02",
    quatity: 123,
    description: "The Category 02",
    stock: false,
  },
  {
    name: "Category 03",
    quatity: 123,
    description: "The Category 03",
    stock: true,
  },
  {
    name: "Category 04",
    quatity: 123,
    description: "The Category 04",
    stock: false,
  },
  {
    name: "Category 05",
    quatity: 123,
    description: "The Category 05",
    stock: true,
  }
];

class Categories extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Categories Page</h1>
        <SearchBar 
          actions={this.props.actions}
        />
        <CategoryList 
          filterText={this.props.categories.searchText}
          inStockOnly={this.props.categories.isStocked}
          categories={CATEGORIES}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
